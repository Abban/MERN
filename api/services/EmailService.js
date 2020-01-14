class EmailService {
    _from;
    _to;
    _cc;
    _bcc;
    _subject;
    _message;

    init = () => {
        this._from = '';
        this._to = '';
        this._cc = '';
        this._bcc = '';
        this._subject = '';
        this._message = '';

        return this;
    };

    to = (to) => {
        this._to = to;
        return this;
    };

    from = (from) => {
        this._from = from;
        return this;
    };

    cc = (cc) => {
        this._cc = cc;
        return this;
    };

    bcc = (bcc) => {
        this._bcc = bcc;
        return this;
    };

    subject = (subject) => {
        this._subject = subject;
        return this;
    };

    message = (message) => {
        this._message = message;
        return this;
    };

    send = async () => {
        console.log(
            'to: ' + this._to,
            'from: ' + this._from,
            'cc: ' + this._cc,
            'bcc: ' + this._bcc,
            'subject: ' + this._subject,
            'message: ' + this._message
        );
    };

}

const EmailServiceSingleton = new EmailService();

export default EmailServiceSingleton;