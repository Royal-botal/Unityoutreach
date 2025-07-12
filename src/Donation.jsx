import React, { useState, useEffect } from 'react';
import './Donation.css';

const Donation = () => {
    const [donationAmount, setDonationAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('prompt');
    const [donationType, setDonationType] = useState('one-time');
    const [recurringInterval, setRecurringInterval] = useState('monthly');
    const [donorInfo, setDonorInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: ''
    });
    const [bankCardInfo, setBankCardInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
    });
    const [donationHistory, setDonationHistory] = useState([]);
    const [paymentStatus, setPaymentStatus] = useState('pending');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // Simulate donation history
    useEffect(() => {
        const mockHistory = [
            { id: 1, amount: 100, date: '2024-01-15', status: 'completed', method: 'bank' },
            { id: 2, amount: 50, date: '2024-02-01', status: 'completed', method: 'prompt' },
            { id: 3, amount: 250, date: '2024-02-15', status: 'pending', method: 'bank' }
        ];
        setDonationHistory(mockHistory);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDonorInfo(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleBankCardChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
        
        // Format card number with spaces
        if (name === 'cardNumber') {
            formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        }
        
        // Format expiry date
        if (name === 'expiryDate') {
            formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
        }
        
        setBankCardInfo(prev => ({
            ...prev,
            [name]: formattedValue
        }));
        
        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        
        // Basic validation
        if (!donorInfo.name.trim()) errors.name = 'Name is required';
        if (!donorInfo.email.trim()) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) errors.email = 'Email is invalid';
        if (!donationAmount) errors.amount = 'Please select or enter an amount';
        if (donationType === 'recurring' && !recurringInterval) errors.interval = 'Please select recurring interval';
        
        // Payment method specific validation
        if (paymentMethod === 'prompt') {
            if (!donorInfo.phone.trim()) errors.phone = 'Phone number is required for prompt payment';
            else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(donorInfo.phone)) errors.phone = 'Please enter a valid phone number';
        }
        
        if (paymentMethod === 'bank') {
            if (!bankCardInfo.cardNumber.replace(/\s/g, '')) errors.cardNumber = 'Card number is required';
            else if (bankCardInfo.cardNumber.replace(/\s/g, '').length < 13) errors.cardNumber = 'Please enter a valid card number';
            
            if (!bankCardInfo.expiryDate) errors.expiryDate = 'Expiry date is required';
            else if (!/^\d{2}\/\d{2}$/.test(bankCardInfo.expiryDate)) errors.expiryDate = 'Please enter expiry date (MM/YY)';
            
            if (!bankCardInfo.cvv) errors.cvv = 'CVV is required';
            else if (!/^\d{3,4}$/.test(bankCardInfo.cvv)) errors.cvv = 'Please enter a valid CVV';
            
            if (!bankCardInfo.cardholderName.trim()) errors.cardholderName = 'Cardholder name is required';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setPaymentStatus('processing');
        
        // Simulate payment processing
        setTimeout(() => {
            setPaymentStatus('completed');
            setShowConfirmation(true);
            
            // Add to donation history
            const newDonation = {
                id: Date.now(),
                amount: parseFloat(donationAmount),
                date: new Date().toISOString().split('T')[0],
                status: 'completed',
                method: paymentMethod,
                type: donationType,
                interval: donationType === 'recurring' ? recurringInterval : null
            };
            setDonationHistory(prev => [newDonation, ...prev]);
            
            // Send email confirmation
            sendEmailConfirmation();
            
        }, 2000);
    };

    const sendEmailConfirmation = () => {
        // Simulate email sending
        console.log('Sending email confirmation to:', donorInfo.email);
        // In a real app, this would call your backend API
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'status-completed';
            case 'pending': return 'status-pending';
            case 'processing': return 'status-processing';
            default: return 'status-pending';
        }
    };

    if (showConfirmation) {
        return (
            <div className="donation-page">
                <div className="donation-container">
                    <div className="confirmation-section">
                        <div className="confirmation-icon">✅</div>
                        <h1>Thank You for Your Donation!</h1>
                        <p>Your contribution of {formatCurrency(donationAmount)} has been received successfully.</p>
                        <div className="confirmation-details">
                            <p><strong>Transaction ID:</strong> TX{Date.now()}</p>
                            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                            <p><strong>Payment Method:</strong> {paymentMethod === 'prompt' ? 'Prompt Payment' : 'Bank Transfer'}</p>
                            {donationType === 'recurring' && (
                                <p><strong>Recurring:</strong> {recurringInterval}</p>
                            )}
                        </div>
                        <p className="email-notice">A confirmation email has been sent to {donorInfo.email}</p>
                        <button 
                            onClick={() => setShowConfirmation(false)}
                            className="btn-secondary"
                        >
                            Make Another Donation
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="donation-page">
            <div className="donation-container">
                <div className="donation-header">
                    <h1>Make a Donation</h1>
                    <p>Your generosity helps us continue our mission of empowering communities through education, healthcare, and sustainable development.</p>
                </div>

                <form onSubmit={handleSubmit} className="donation-form">
                    <div className="form-section">
                        <h3>Donor Information</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={donorInfo.name}
                                    onChange={handleInputChange}
                                    className={formErrors.name ? 'error' : ''}
                                    placeholder="Enter your full name"
                                />
                                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={donorInfo.email}
                                    onChange={handleInputChange}
                                    className={formErrors.email ? 'error' : ''}
                                    placeholder="Enter your email address"
                                />
                                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={donorInfo.country}
                                    onChange={handleInputChange}
                                    placeholder="Enter your country"
                                />
                            </div>
                            {paymentMethod === 'prompt' && (
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={donorInfo.phone}
                                        onChange={handleInputChange}
                                        className={formErrors.phone ? 'error' : ''}
                                        placeholder="Enter your phone number"
                                    />
                                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Donation Type</h3>
                        <div className="donation-type-options">
                            <div className="donation-type-option">
                                <input
                                    type="radio"
                                    id="one-time"
                                    name="donationType"
                                    value="one-time"
                                    checked={donationType === 'one-time'}
                                    onChange={(e) => setDonationType(e.target.value)}
                                />
                                <label htmlFor="one-time">
                                    <span className="type-icon">💝</span>
                                    <div>
                                        <strong>One-Time Donation</strong>
                                        <p>Make a single contribution</p>
                                    </div>
                                </label>
                            </div>
                            <div className="donation-type-option">
                                <input
                                    type="radio"
                                    id="recurring"
                                    name="donationType"
                                    value="recurring"
                                    checked={donationType === 'recurring'}
                                    onChange={(e) => setDonationType(e.target.value)}
                                />
                                <label htmlFor="recurring">
                                    <span className="type-icon">🔄</span>
                                    <div>
                                        <strong>Recurring Donation</strong>
                                        <p>Set up automatic monthly contributions</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {donationType === 'recurring' && (
                            <div className="recurring-options">
                                <label htmlFor="recurringInterval">Recurring Interval:</label>
                                <select
                                    id="recurringInterval"
                                    value={recurringInterval}
                                    onChange={(e) => setRecurringInterval(e.target.value)}
                                >
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="form-section">
                        <h3>Donation Amount</h3>
                        <div className="amount-options">
                            <button
                                type="button"
                                className={`amount-btn ${donationAmount === '50' ? 'active' : ''}`}
                                onClick={() => setDonationAmount('50')}
                            >
                                $50
                            </button>
                            <button
                                type="button"
                                className={`amount-btn ${donationAmount === '100' ? 'active' : ''}`}
                                onClick={() => setDonationAmount('100')}
                            >
                                $100
                            </button>
                            <button
                                type="button"
                                className={`amount-btn ${donationAmount === '250' ? 'active' : ''}`}
                                onClick={() => setDonationAmount('250')}
                            >
                                $250
                            </button>
                            <button
                                type="button"
                                className={`amount-btn ${donationAmount === '500' ? 'active' : ''}`}
                                onClick={() => setDonationAmount('500')}
                            >
                                $500
                            </button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="customAmount">Custom Amount</label>
                            <input
                                type="number"
                                id="customAmount"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                                className={formErrors.amount ? 'error' : ''}
                                placeholder="Enter amount"
                                min="1"
                            />
                            {formErrors.amount && <span className="error-message">{formErrors.amount}</span>}
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Payment Method</h3>
                        <div className="payment-options">
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="prompt"
                                    name="paymentMethod"
                                    value="prompt"
                                    checked={paymentMethod === 'prompt'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label htmlFor="prompt">
                                    <span className="payment-icon">📱</span>
                                    <div>
                                        <strong>Prompt Payment</strong>
                                        <p>Pay via mobile money or USSD code</p>
                                    </div>
                                </label>
                            </div>
                            <div className="payment-option">
                                <input
                                    type="radio"
                                    id="bank"
                                    name="paymentMethod"
                                    value="bank"
                                    checked={paymentMethod === 'bank'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label htmlFor="bank">
                                    <span className="payment-icon">🏦</span>
                                    <div>
                                        <strong>Bank Transfer</strong>
                                        <p>Transfer to our bank account</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        {paymentMethod === 'prompt' && (
                            <div className="payment-details">
                                <h4>Prompt Payment Details</h4>
                                <div className="payment-info">
                                    <p><strong>USSD Code:</strong> *123*456#</p>
                                    <p><strong>Reference:</strong> UnityOutreach</p>
                                    <p><strong>Amount:</strong> {formatCurrency(donationAmount || 0)}</p>
                                    <p><strong>Phone:</strong> {donorInfo.phone || 'Enter your phone number above'}</p>
                                </div>
                            </div>
                        )}

                        {paymentMethod === 'bank' && (
                            <>
                                <div className="payment-details">
                                    <h4>Bank Account Details</h4>
                                    <div className="payment-info">
                                        <p><strong>Bank Name:</strong> Unity Bank</p>
                                        <p><strong>Account Number:</strong> 1234567890</p>
                                        <p><strong>Account Name:</strong> Unity Outreach Foundation</p>
                                        <p><strong>Swift Code:</strong> UNITYUS33</p>
                                        <p><strong>Reference:</strong> {donorInfo.name || 'Your Name'}</p>
                                    </div>
                                </div>
                                
                                <div className="bank-card-section">
                                    <h4>Bank Card Details</h4>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="cardNumber">Card Number *</label>
                                            <input
                                                type="text"
                                                id="cardNumber"
                                                name="cardNumber"
                                                value={bankCardInfo.cardNumber}
                                                onChange={handleBankCardChange}
                                                className={formErrors.cardNumber ? 'error' : ''}
                                                placeholder="1234 5678 9012 3456"
                                                maxLength="19"
                                            />
                                            {formErrors.cardNumber && <span className="error-message">{formErrors.cardNumber}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cardholderName">Cardholder Name *</label>
                                            <input
                                                type="text"
                                                id="cardholderName"
                                                name="cardholderName"
                                                value={bankCardInfo.cardholderName}
                                                onChange={handleBankCardChange}
                                                className={formErrors.cardholderName ? 'error' : ''}
                                                placeholder="Name on card"
                                            />
                                            {formErrors.cardholderName && <span className="error-message">{formErrors.cardholderName}</span>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="expiryDate">Expiry Date *</label>
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                name="expiryDate"
                                                value={bankCardInfo.expiryDate}
                                                onChange={handleBankCardChange}
                                                className={formErrors.expiryDate ? 'error' : ''}
                                                placeholder="MM/YY"
                                                maxLength="5"
                                            />
                                            {formErrors.expiryDate && <span className="error-message">{formErrors.expiryDate}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cvv">CVV *</label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                name="cvv"
                                                value={bankCardInfo.cvv}
                                                onChange={handleBankCardChange}
                                                className={formErrors.cvv ? 'error' : ''}
                                                placeholder="123"
                                                maxLength="4"
                                            />
                                            {formErrors.cvv && <span className="error-message">{formErrors.cvv}</span>}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        className="submit-donation"
                        disabled={paymentStatus === 'processing'}
                    >
                        {paymentStatus === 'processing' ? 'Processing...' : 'Complete Donation'}
                    </button>
                </form>

                <div className="donation-history-section">
                    <h3>Recent Donations</h3>
                    <div className="donation-history">
                        {donationHistory.map(donation => (
                            <div key={donation.id} className="history-item">
                                <div className="history-amount">{formatCurrency(donation.amount)}</div>
                                <div className="history-details">
                                    <div className="history-date">{donation.date}</div>
                                    <div className={`history-status ${getStatusColor(donation.status)}`}>
                                        {donation.status}
                                    </div>
                                </div>
                                <div className="history-method">{donation.method}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
