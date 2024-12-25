class ApiResponse {
    constructor(statusCode, data, message  = "Success"){
        this.statusbar = statusCode
        this.data = data
        this.message = message
        this.success = statusbar < 400
    }
}

export  {ApiResponse}