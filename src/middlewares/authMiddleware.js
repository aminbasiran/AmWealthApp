const mockUser = {
    id: 1,
    username: 'mockuser',
    email: 'mockuser@example.com',
};

  // Mock authentication middleware
const mockAuthMiddleware = (req, res, next) => {
    // Check if user is authenticated
    if (Object.keys(mockUser).length === 0) {
        return res.status(401).json({ error: 'Unauthorized: User not authenticated' });
    }
    // If user is authenticated, add the mock user object to the request
    req.user = mockUser;
    next();
};

module.exports = {mockAuthMiddleware};