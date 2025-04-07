$(document).ready(function () {
    // Сколько новостей показывать изначально
    const initialVisible = 6;

    // Получаем все карточки новостей
    const $newsCards = $(".news-card");

    // Скрываем лишние карточки
    $newsCards.slice(initialVisible).addClass("hidden");

    // Если новостей больше, чем initialVisible — добавляем кнопку
    if ($newsCards.length > initialVisible) {
        const $button = $("<button>")
            .addClass("show-more-btn")
            .text("Показать ещё");

        $(".news").after($button);

        $button.on("click", function () {
            // Показываем скрытые карточки с анимацией
            $(".news-card.hidden").slice(0, 6).slideDown(300).removeClass("hidden");

            // Если больше скрытых не осталось — убираем кнопку
            if ($(".news-card.hidden").length === 0) {
                $button.remove();
            }
        });
    }

    // Наведение — эффект подсветки заголовка
    $(".news-card").hover(
        function () {
            $(this).find("h2").css("color", "#007bff");
        },
        function () {
            $(this).find("h2").css("color", "");
        }
    );
});
