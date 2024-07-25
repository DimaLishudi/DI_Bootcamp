export class HTTPError extends Error {
    constructor(status, response_message, message=null) {
        if (message === null) {
            message = response_message;
        }
        super(message);
        this.status = status;
        this.response_message = response_message;
    }

    resolve(res) {
        res.status(this.status).send(this.response_message);
        console.log(this.message);
    }
}


export class PostNotFoundError extends HTTPError {
    constructor(id) {
        super(404, `Post #${id} Not Found`);
    }
}

// Unused here
export class InternalError extends HTTPError {
    constructor(message=null) {
        super(500, "Internal Server Error", message);
    }
}

export class DBError extends HTTPError {
    constructor(message=null) {
        super(500, "Internal Database Error", message);
    }
}