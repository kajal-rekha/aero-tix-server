const isAdmin = async (req, res, next) => {
    if (req.user?.role === "admin") {
        next();
    } else {
        req.status(403).json({ error: "Unauthorized access" });
    }
};

export default { isAdmin };
