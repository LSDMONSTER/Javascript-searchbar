// Voorbeeld dataset
var data = [
    { naam: "Shireen", tel: "0644404056", stad: "Amsterdam" },
    { naam: "Joseph", tel: "0632123432", stad: "Utrecht" },
    { naam: "Husain", tel: "0653923099", stad: "Amsterdam" },
    { naam: "Avital", tel: "0676542388", stad: "Utrecht" },
    { naam: "Albert", tel: "0653421212", stad: "Madrid" }
  ];
  
  // Referenties naar HTML-elementen
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");
  
  // Functie om te zoeken en resultaten weer te geven
  function search() {
    var searchTerm = searchInput.value.toLowerCase();
    var filteredData = data.filter(function(item) {
      return (
        item.naam.toLowerCase().indexOf(searchTerm) !== -1 ||
        item.tel.indexOf(searchTerm) !== -1 ||
        item.stad.toLowerCase().indexOf(searchTerm) !== -1
      );
    });
  
    searchResults.innerHTML = filteredData
      .map(function(item) {
        return `
          <div class="grid-item">
            <div class="result-naam">${item.naam}</div>
            <div class="result-info">
              <span>tel: ${item.tel}</span>
              <span>stad: ${item.stad}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }
  
  // Zoekfunctie aanroepen bij het wijzigen van de zoekterm
  searchInput.addEventListener("input", search);
  
  // Voer de initiële zoekopdracht uit
  search();
  