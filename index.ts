import app from './src/server';

const PORT = 8080;

// Listen to localhost only
app.listen(PORT, () => {
    console.log(`Server started at localhost: ${PORT}`);
});
