module.exports = {
    siteMetadata: {
        description: "Personal page of Rahaman Sharif Shaik",
        locale: "en",
        title: "Rahaman Sharif Shaik",
        formspreeEndpoint: "https://formspree.io/f/xzbywedl",
        showThemeLogo: false
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: false,
                theme: "gh-inspired",
            },
        },
    ],
}