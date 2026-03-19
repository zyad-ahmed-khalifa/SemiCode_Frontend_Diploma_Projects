let primaryProject = $(".tab-content .primary .projects .row");
let secondaryProject = $(".tab-content .secondary .projects .row");
let exercises = $("#pills-exercises .row");
$.ajax({
    type: "GET",
    url: "data.json",
    success: function (data) {
        let primProject = data.filter((obj) => {
            return obj.type == "pProject"
        })
        let secProject = data.filter((obj) => {
            return obj.type == "sProject"
        })
        let exe = data.filter((obj) => {
            return obj.type == "exercise"
        })

        console.log(primProject)
        // primary
        primProject.forEach(obj => {
            let langs = ``
            obj.languages.forEach((lang) => {
                langs += `<span class="py-1 px-2 rounded me-1">${lang}</span>`
            })
            primaryProject.get(0).innerHTML += `
                    <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                        <div class="card p-2 rounded-3 border-0 mb-2">
                            <img src="${obj.image}" class="card-img-top rounded-3" alt="...">
                            <div class="card-body">
                                <h3 class="card-title mb-3 text-center">${obj.name}</h5>
                                <div class="lang mb-3 d-flex flex-column flex-lg-row">
                                    <p class="me-2 mt-0 mb-1  mb-lg-0">languages: </p>
                                    <div class="items d-flex flex-wrap">
                                        ${langs}
                                    </div>
                                </div>
                                <div class="btns">
                                    <a href="${obj.link}" class="btn btn-dark w-100 mb-2"><i class="fa-solid fa-link mx-1"></i> view website</a>
                                    <a href="${obj.path}" class="btn btn-dark w-100" download="${obj.fileName}"><i class="fa-solid fa-download mx-1"></i> download assets</a>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        });
        //secondary
        secProject.forEach(obj => {
            let langs = ``
            obj.languages.forEach((lang) => {
                langs += `<span class="py-1 px-2 rounded me-1">${lang}</span>`
            })
            secondaryProject.get(0).innerHTML += `
                    <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                        <div class="card p-2 rounded-3 border-0 mb-2">
                            <img src="${obj.image}" class="card-img-top rounded-3" alt="...">
                            <div class="card-body">
                                <h3 class="card-title mb-3 text-center">${obj.name}</h5>
                                <div class="lang mb-3 d-flex flex-column flex-lg-row">
                                    <p class="me-2 mt-0 mb-1  mb-lg-0">languages: </p>
                                    <div class="items d-flex flex-wrap">
                                        ${langs}
                                    </div>
                                </div>
                                <div class="btns">
                                    <a href="${obj.link}" class="btn btn-dark w-100 mb-2"><i class="fa-solid fa-link mx-1"></i> view website</a>
                                    <a href="${obj.path}" class="btn btn-dark w-100" download="${obj.fileName}"><i class="fa-solid fa-download mx-1"></i> download assets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        });
        //exercises
        exe.forEach(obj => {
            let langs = ``
            obj.languages.forEach((lang) => {
                langs += `<span class="py-1 px-2 rounded me-1">${lang}</span>`
            })
            exercises.get(0).innerHTML +=`
                    <div class="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                        <div class="card p-2 rounded-3 border-0 mb-2">
                            <img src="${obj.image}" class="card-img-top rounded-3" alt="...">
                            <div class="card-body">
                                <h3 class="card-title mb-3 text-center">${obj.name}</h5>
                                <div class="lang mb-3 d-flex flex-column flex-lg-row">
                                    <p class="me-2 mt-0 mb-1  mb-lg-0">languages: </p>
                                    <div class="items d-flex flex-wrap">
                                        ${langs}
                                    </div>
                                </div>
                                <div class="btns">
                                    <a href="${obj.link}" class="btn btn-dark w-100 mb-2 "><i class="fa-solid fa-link mx-1"></i> view website</a>
                                    <a href="${obj.path}" class="btn btn-dark w-100 " download="${obj.fileName}"><i class="fa-solid fa-download mx-1"></i> download assets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        });
    }
});