export const errorMiddleware = (err, req, res, next) => {
    // err.message = err.message || ""
    err.message || (err.message = "Internal Server Error");
    err.statusCode || (err.statusCode = 500);
    return res.status(400).json({
        success: false,
        message: err.message,
    });
};
export const TryCatch = (func) => (req, res, next) => {
    return Promise.resolve(func(req, res, next)).catch(next);
};
