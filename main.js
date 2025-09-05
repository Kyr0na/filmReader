document.addEventListener('DOMContentLoaded', async () => {

    const box = document.getElementById('box');

    /*let promise = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'dca541ef-5d09-446a-8218-61b150a79435',
        'Content-Type': 'application/json',
    },
})

    if (promise.ok) {
        let json = await promise.json();
        console.log(json);
        for (let i = 0; i < json.items.length; i++) {
            let cont = document.createElement('div');
            cont.className = 'cont';
            cont.innerHTML = json.items[i];

            box.appendChild(cont);
        }
    } else {
        console.log(promise.status);
    }
*/
let json = {
    "total": 100,
    "totalPages": 5,
    "items": [
        {
            "kinopoiskId": 1201206,
            "imdbId": null,
            "nameRu": null,
            "nameEn": null,
            "nameOriginal": "BTS: Blood Sweat & Tears",
            "countries": [
                {
                    "country": "Корея Южная"
                }
            ],
            "genres": [
                {
                    "genre": "музыка"
                },
                {
                    "genre": "короткометражка"
                }
            ],
            "ratingKinopoisk": 9.4,
            "ratingImdb": null,
            "year": 2016,
            "type": "VIDEO",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1201206.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1201206.jpg"
        },
        {
            "kinopoiskId": 6862424,
            "imdbId": null,
            "nameRu": "У края бездны",
            "nameEn": null,
            "nameOriginal": null,
            "countries": [
                {
                    "country": "Россия"
                }
            ],
            "genres": [
                {
                    "genre": "документальный"
                }
            ],
            "ratingKinopoisk": 9.3,
            "ratingImdb": null,
            "year": 2024,
            "type": "MINI_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/6862424.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/6862424.jpg"
        },
        {
            "kinopoiskId": 5249436,
            "imdbId": null,
            "nameRu": "Когда жизнь даёт тебе мандарины",
            "nameEn": null,
            "nameOriginal": "Pokssak sokassuda",
            "countries": [
                {
                    "country": "Корея Южная"
                }
            ],
            "genres": [
                {
                    "genre": "драма"
                },
                {
                    "genre": "мелодрама"
                }
            ],
            "ratingKinopoisk": 9.3,
            "ratingImdb": 9.2,
            "year": 2025,
            "type": "TV_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5249436.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5249436.jpg"
        },
        {
            "kinopoiskId": 1072974,
            "imdbId": "tt13535142",
            "nameRu": "Герои Энвелла",
            "nameEn": null,
            "nameOriginal": null,
            "countries": [
                {
                    "country": "Россия"
                }
            ],
            "genres": [
                {
                    "genre": "фантастика"
                },
                {
                    "genre": "мультфильм"
                },
                {
                    "genre": "детский"
                }
            ],
            "ratingKinopoisk": 9.3,
            "ratingImdb": null,
            "year": 2017,
            "type": "TV_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1072974.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1072974.jpg"
        },
        {
            "kinopoiskId": 962472,
            "imdbId": "tt5396486",
            "nameRu": "Hot Wheels. За гранью воображения",
            "nameEn": null,
            "nameOriginal": "Team Hot Wheels: The Skills to Thrill",
            "countries": [
                {
                    "country": "США"
                }
            ],
            "genres": [
                {
                    "genre": "мультфильм"
                },
                {
                    "genre": "детский"
                }
            ],
            "ratingKinopoisk": 9.3,
            "ratingImdb": 6.9,
            "year": 2015,
            "type": "FILM",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/962472.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/962472.jpg"
        },
        {
            "kinopoiskId": 5260016,
            "imdbId": null,
            "nameRu": "Попкульт",
            "nameEn": null,
            "nameOriginal": null,
            "countries": [
                {
                    "country": "Россия"
                }
            ],
            "genres": [
                {
                    "genre": "документальный"
                }
            ],
            "ratingKinopoisk": 9.3,
            "ratingImdb": null,
            "year": 2022,
            "type": "TV_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5260016.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5260016.jpg"
        },
        {
            "kinopoiskId": 1200528,
            "imdbId": null,
            "nameRu": null,
            "nameEn": null,
            "nameOriginal": "BTS: Not Today",
            "countries": [
                {
                    "country": "Корея Южная"
                }
            ],
            "genres": [
                {
                    "genre": "музыка"
                },
                {
                    "genre": "короткометражка"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 8.9,
            "year": 2017,
            "type": "VIDEO",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1200528.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1200528.jpg"
        },
        {
            "kinopoiskId": 1309325,
            "imdbId": null,
            "nameRu": "Космос",
            "nameEn": null,
            "nameOriginal": "",
            "countries": [
                {
                    "country": "США"
                }
            ],
            "genres": [
                {
                    "genre": "документальный"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": null,
            "year": 2019,
            "type": "TV_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1309325.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1309325.jpg"
        },
        {
            "kinopoiskId": 952236,
            "imdbId": "tt5223716",
            "nameRu": "Hot Wheels. Мегатрасса",
            "nameEn": null,
            "nameOriginal": "Team Hot Wheels: Build the Epic Race",
            "countries": [
                {
                    "country": "США"
                }
            ],
            "genres": [
                {
                    "genre": "мультфильм"
                },
                {
                    "genre": "детский"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 6.4,
            "year": 2015,
            "type": "FILM",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/952236.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/952236.jpg"
        },
        {
            "kinopoiskId": 5413905,
            "imdbId": null,
            "nameRu": "Диана Арбенина. Ночные Снайперы-30 лет. Стадион Спартак",
            "nameEn": null,
            "nameOriginal": null,
            "countries": [
                {
                    "country": "Россия"
                }
            ],
            "genres": [
                {
                    "genre": "документальный"
                },
                {
                    "genre": "концерт"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": null,
            "year": 2023,
            "type": "VIDEO",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5413905.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5413905.jpg"
        },
        {
            "kinopoiskId": 5139058,
            "imdbId": "tt21093976",
            "nameRu": "На первый взгляд",
            "nameEn": null,
            "nameOriginal": "National Theatre Live: Prima Facie",
            "countries": [
                {
                    "country": "Великобритания"
                }
            ],
            "genres": [
                {
                    "genre": "драма"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 9.1,
            "year": 2022,
            "type": "FILM",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5139058.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5139058.jpg"
        },
        {
            "kinopoiskId": 674243,
            "imdbId": null,
            "nameRu": "Счастливые люди",
            "nameEn": null,
            "nameOriginal": null,
            "countries": [
                {
                    "country": "Россия"
                }
            ],
            "genres": [
                {
                    "genre": "документальный"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 8.7,
            "year": 2008,
            "type": "MINI_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/674243.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/674243.jpg"
        },
        {
            "kinopoiskId": 5235920,
            "imdbId": "tt24807190",
            "nameRu": "BTS: Yet To Come in Cinemas",
            "nameEn": null,
            "nameOriginal": null,
            "countries": [
                {
                    "country": "Корея Южная"
                }
            ],
            "genres": [
                {
                    "genre": "музыка"
                },
                {
                    "genre": "концерт"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 8.6,
            "year": 2023,
            "type": "VIDEO",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5235920.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5235920.jpg"
        },
        {
            "kinopoiskId": 351771,
            "imdbId": "tt0276902",
            "nameRu": null,
            "nameEn": null,
            "nameOriginal": "Depeche Mode: Devotional",
            "countries": [
                {
                    "country": "Великобритания"
                }
            ],
            "genres": [
                {
                    "genre": "музыка"
                },
                {
                    "genre": "документальный"
                },
                {
                    "genre": "концерт"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 9.1,
            "year": 1993,
            "type": "VIDEO",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/351771.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/351771.jpg"
        },
        {
            "kinopoiskId": 45319,
            "imdbId": "tt0216434",
            "nameRu": "Жил-был пёс",
            "nameEn": null,
            "nameOriginal": null,
            "countries": [
                {
                    "country": "СССР"
                }
            ],
            "genres": [
                {
                    "genre": "комедия"
                },
                {
                    "genre": "мультфильм"
                },
                {
                    "genre": "семейный"
                },
                {
                    "genre": "короткометражка"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 8.4,
            "year": 1982,
            "type": "FILM",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/45319.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/45319.jpg"
        },
        {
            "kinopoiskId": 1339977,
            "imdbId": null,
            "nameRu": "Уровень тревоги: Полночь",
            "nameEn": null,
            "nameOriginal": "Threat Level Midnight: The Movie",
            "countries": [
                {
                    "country": "США"
                },
                {
                    "country": "Великобритания"
                }
            ],
            "genres": [
                {
                    "genre": "боевик"
                },
                {
                    "genre": "комедия"
                },
                {
                    "genre": "короткометражка"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 9.6,
            "year": 2011,
            "type": "FILM",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1339977.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1339977.jpg"
        },
        {
            "kinopoiskId": 1003587,
            "imdbId": "tt6146460",
            "nameRu": "Гамильтон",
            "nameEn": null,
            "nameOriginal": "Hamilton's America",
            "countries": [
                {
                    "country": "США"
                }
            ],
            "genres": [
                {
                    "genre": "биография"
                },
                {
                    "genre": "мюзикл"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 8.3,
            "year": 2016,
            "type": "FILM",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1003587.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1003587.jpg"
        },
        {
            "kinopoiskId": 1007472,
            "imdbId": null,
            "nameRu": "Планета Земля 2",
            "nameEn": null,
            "nameOriginal": "Planet Earth II",
            "countries": [
                {
                    "country": "США"
                },
                {
                    "country": "Франция"
                },
                {
                    "country": "Великобритания"
                },
                {
                    "country": "Германия"
                },
                {
                    "country": "Китай"
                }
            ],
            "genres": [
                {
                    "genre": "документальный"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 9.4,
            "year": 2016,
            "type": "MINI_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1007472.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1007472.jpg"
        },
        {
            "kinopoiskId": 1043658,
            "imdbId": null,
            "nameRu": "Шоу Грязного Фрэнка",
            "nameEn": null,
            "nameOriginal": "The Filthy Frank Show",
            "countries": [
                {
                    "country": "США"
                },
                {
                    "country": "Австралия"
                },
                {
                    "country": "Япония"
                }
            ],
            "genres": [
                {
                    "genre": "комедия"
                },
                {
                    "genre": "короткометражка"
                }
            ],
            "ratingKinopoisk": 9.2,
            "ratingImdb": 9.1,
            "year": 2011,
            "type": "TV_SERIES",
            "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1043658.jpg",
            "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1043658.jpg"
        }
    ]
};

for (let i = 0; i < json.items.length; i++) {
            let cont = document.createElement('div');
            let img = document.createElement('img');

            cont.className = 'cont';
            img.className = 'imgplane';
            let response = json.items[i];
            
            img.src = response.posterUrlPreview;
            
            box.appendChild(cont);
            cont.appendChild(img);
        }
});

//https://kinopoiskapiunofficial.tech/profile