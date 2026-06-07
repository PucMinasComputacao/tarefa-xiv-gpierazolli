const ctx = document.getElementById("graficoFilmes");

new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Romance", "Comédia", "Terror", "Suspense"],
        datasets: [{
            data: [4, 3, 2, 1]
        }]
    }
});

fetch("http://localhost:3000/filmes")
    .then(response => response.json())
    .then(filmes => {

        let romance = 0;
        let comedia = 0;
        let terror = 0;
        let suspense = 0;

        filmes.forEach(filme => {

            switch (filme.genero) {

                case "Romance":
                    romance++;
                    break;

                case "Comédia":
                    comedia++;
                    break;

                case "Terror":
                    terror++;
                    break;

                case "Suspense":
                    suspense++;
                    break;
            }
        });

        const ctx = document.getElementById("graficoFilmes");

        new Chart(ctx, {
            type: "pie",

            data: {
                labels: [
                    "Romance",
                    "Comédia",
                    "Terror",
                    "Suspense"
                ],

                datasets: [{
                    data: [
                        romance,
                        comedia,
                        terror,
                        suspense
                    ],

                    backgroundColor: [
                        "#ff6384",
                        "#36a2eb",
                        "#ff9f40",
                        "#9966ff"
                    ]
                }]
            },

            options: {
                responsive: true,

                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });
    });

  