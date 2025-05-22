// Webpack.config.js 

const path = require('path'); // Utilisé pour créer des chemins absolus
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Génère un fichier HTML automatiquement

module.exports = {
    entry: './src/index.js', // Point d’entrée principal de ton app
    output: {
        filename: 'bundle.js', // Nom du fichier généré
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie absolu
        clean: true, // Vide le dossier dist à chaque build
    },
    mode: 'development', // Mode dev pour garder les erreurs lisibles
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/todos.html', // Le fichier HTML de base
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, // Pour gérer les fichiers CSS
                use: ['style-loader', 'css-loader'], // Injecte le CSS dans le HTML
            },
        ],
    },
    devServer: {
        static: './dist', // Indique où servir les fichiers
        port: 8080,
        open: true, // Ouvre automatiquement dans le navigateur
    },
};