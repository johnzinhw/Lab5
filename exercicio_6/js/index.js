start();

function start() {
    btn = document.getElementById('calcular');
    btn.onclick = function () {
        i = 0;
        pos = 0;
        final = 0;
        for (pos = 1; pos <= 3; pos++) {
            for (i = 1; i <= 4; i++) {
                final += parseFloat(document.getElementById('nota' + pos + '-' + i).value);
            }
            document.getElementById('final-' + pos).value = final;
            document.getElementById('media-' + pos).value = final / (i - 1);
            final = 0;

        }
    }
}