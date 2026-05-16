const{ createApp}= Vue;
createApp({
    data(){
        return{
        searchText: "",
        articles: [
            {
                id:1,
                title:"Understanding the difference between grid-template and grid-auto",
                date:"Oct 09, 2018",
                body:"With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns."

            },
            {
                id:2,
                title:"Recreating the GitHub Contribution Graph with CSS Grid Layout",
                date:"Oct 11, 2018",
                body:"CSS Grid Layout makes it possible to recreate complex layouts like the GitHub contribution graph using rows, columns, and grid cells."


            },
            {
                id:3,
                title:"Learn Flexbox by Building a Navigatoon Bar",
                date:"Nov 01, 2018",
                body:"Flexbox is useful for arranging items in a row or column. It helps create responsive layouts and navigation bars."
            }
        ]
        };
    },
    computed:{
        filteredArticles(){
            const search =this.searchText.toLowerCase().trim();
            if(!search){
                return this.articles;
            }
            return this.articles.filter(article =>{
                return (
                    article.title.toLowerCase().includes(search) || 
                    article.body.toLowerCase().includes(search)
                );
            });
        }
    },
    methods: {
        clearSearch(){
            this.searchText="";
        },
        highlightText(text){
            const search = this.searchText.trim();
            if(!search){
                return text;
            }

            const escapedSearch= search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp(`(${escapedSearch})`,"gi");

            return text.replace(regex,"<mark>$1</mark>");
        }
    }
}).mount("#app");