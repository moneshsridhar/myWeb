
	$(document).click(function () {
            domtoimage.toPng(document.body)
            .then(function (blob) {
            var pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(blob,'PNG', 0, 0, 210, 225);
            pdf.save("moneshresume.pdf");

            that.options.api.optionsChanged();
            });
        });
