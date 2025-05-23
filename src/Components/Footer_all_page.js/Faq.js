import React from 'react'

const Faq = () => {
    return (
        <>
            {/* breadcrumb section */}
            <div className="breadcrumb-area">
                <div className="container">
                    {/* row */}
                    <div className="row ">
                        {/* col */}
                        <div className="col-12 col-lg-6 align-self-center">
                            {/* breadcrumb */}
                            <div className="page-breadcrumb">
                                <div className="mb-3">
                                    <ul className="list">
                                        <li><a href="index.html">Home</a></li>
                                        <li>FAQ</li>
                                    </ul>
                                </div>
                                <h2 className="display-4 mb-0 theme-text-white font-black">FAQ</h2>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-center text-center">
                            <figure className="mb-0 mt-5 pt-0 pt-lg-5 hero-image">
                                <img src="assets/images/breadcrumb/breadcrumb-faq.png" className="img-fluid" alt="hero image" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* faq section */}
            <section className="faq py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 text-center">
                            <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Frequently Asked Question</p>
                            <h1 className="display-5 mb-3 theme-text-white font-black max">Popular Onthebett Games</h1>
                            <p className="mb-0 theme-text-white">Below you'll find answer to the most common questions</p>
                        </div>
                    </div>
                    {/* faq tab */}
                    <div className="d-flex justify-content-center my-5 faq-tab">
                        <ul className="nav nav-pills mb-3" id="pills-tab2" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">General</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-sports-tab" data-bs-toggle="pill" data-bs-target="#pills-sports" type="button" role="tab" aria-controls="pills-sports" aria-selected="false">Games</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-tournament-tab" data-bs-toggle="pill" data-bs-target="#pills-tournament" type="button" role="tab" aria-controls="pills-tournament" aria-selected="false">Betting</button>
                            </li>
                        </ul>
                    </div>
                    {/* faq content */}
                    <div className="tab-content" id="pills-tab2Content">
                        <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab" tabIndex={0}>
                            {/* tab content 01 / general */}
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <i className="bi bi-question-diamond-fill me-2" /> How do I play Fantasy games?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <i className="bi bi-question-diamond-fill me-2" /> Benefits of Playing Fantasy Sports on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <i className="bi bi-question-diamond-fill me-2" /> Can I Play Practice Fantasy Games on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <i className="bi bi-question-diamond-fill me-2" /> Can I Play Practice Fantasy Games on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <i className="bi bi-question-diamond-fill me-2" /> Any Quick Tips On Making The Best Fantasy Cricket
                                            Team?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab" tabIndex={0}>
                            {/* tab content 02 / sports */}
                            <div className="accordion" id="accordionExample2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOneSports">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSports" aria-expanded="true" aria-controls="collapseOneSports">
                                            <i className="bi bi-question-diamond-fill me-2" /> How do I play Fantasy games?
                                        </button>
                                    </h2>
                                    <div id="collapseOneSports" className="accordion-collapse collapse show" aria-labelledby="headingOneSports" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwoSports">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSports" aria-expanded="false" aria-controls="collapseTwoSports">
                                            <i className="bi bi-question-diamond-fill me-2" /> Benefits of Playing Fantasy Sports on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseTwoSports" className="accordion-collapse collapse" aria-labelledby="headingTwoSports" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThreeSports">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSports" aria-expanded="false" aria-controls="collapseThreeSports">
                                            <i className="bi bi-question-diamond-fill me-2" /> Can I Play Practice Fantasy Games on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseThreeSports" className="accordion-collapse collapse" aria-labelledby="headingThreeSports" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFourSports">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourSports" aria-expanded="false" aria-controls="collapseFourSports">
                                            <i className="bi bi-question-diamond-fill me-2" /> Can I Play Practice Fantasy Games on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseFourSports" className="accordion-collapse collapse" aria-labelledby="headingFourSports" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFiveSports">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveSports" aria-expanded="false" aria-controls="collapseFiveSports">
                                            <i className="bi bi-question-diamond-fill me-2" /> Any Quick Tips On Making The Best Fantasy Cricket
                                            Team?
                                        </button>
                                    </h2>
                                    <div id="collapseFiveSports" className="accordion-collapse collapse" aria-labelledby="headingFiveSports" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-tournament" role="tabpanel" aria-labelledby="pills-tournament-tab" tabIndex={0}>
                            {/* tab content 03 / tournament */}
                            <div className="accordion" id="accordionExample3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOneTournament">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneTournament" aria-expanded="true" aria-controls="collapseOneTournament">
                                            <i className="bi bi-question-diamond-fill me-2" /> How do I play Fantasy games?
                                        </button>
                                    </h2>
                                    <div id="collapseOneTournament" className="accordion-collapse collapse show" aria-labelledby="headingOneTournament" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwoTournament">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTournament" aria-expanded="false" aria-controls="collapseTwoTournament">
                                            <i className="bi bi-question-diamond-fill me-2" /> Benefits of Playing Fantasy Sports on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseTwoTournament" className="accordion-collapse collapse" aria-labelledby="headingTwoTournament" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThreeTournament">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeTournament" aria-expanded="false" aria-controls="collapseThreeTournament">
                                            <i className="bi bi-question-diamond-fill me-2" /> Can I Play Practice Fantasy Games on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseThreeTournament" className="accordion-collapse collapse" aria-labelledby="headingThreeTournament" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFourTournament">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourTournament" aria-expanded="false" aria-controls="collapseFourTournament">
                                            <i className="bi bi-question-diamond-fill me-2" /> Can I Play Practice Fantasy Games on Onthebett?
                                        </button>
                                    </h2>
                                    <div id="collapseFourTournament" className="accordion-collapse collapse" aria-labelledby="headingFourTournament" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFiveTournament">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiveTournament" aria-expanded="false" aria-controls="collapseFiveTournament">
                                            <i className="bi bi-question-diamond-fill me-2" /> Any Quick Tips On Making The Best Fantasy Cricket
                                            Team?
                                        </button>
                                    </h2>
                                    <div id="collapseFiveTournament" className="accordion-collapse collapse" aria-labelledby="headingFiveTournament" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            <p className="mb-0"><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit.
                                                Morbi fringilla dolor sed arcu cursus, id interdum dolor sagittis. Class aptent taciti sociosqu ad
                                                litora torquent per
                                                conubia nostra, per inceptos himenaeos. In commodo auctor ex, in malesuada diam euismod sed. Cras
                                                dapibus eu libero ac feugiat.
                                                Quisque lobortis tellus eu egestas fermentum. Donec tristique nisl sit amet dictum sagittis. Mauris
                                                venenatis mattis vehicula.
                                                Donec posuere nulla neque, eget finibus libero vehicula et. Praesent pretium nisl eget faucibus
                                                hendrerit. Nulla malesuada
                                                vitae tortor at suscipit. Maecenas quam erat, sodales at bibendum eu, porta ac metus. Cras quis
                                                ornare diam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* repetable */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* subscribe section */}
            <section className="subscribe py-5">
                <div className="container">
                    <div className="row justify-content-center animate__animated wow animate__fadeInUp">
                        <div className="col-12 col-lg-10">
                            <div className="px-2 px-sm-5 text-center">
                                <p className="mt-5 mb-3 theme-text-secondary fs-4 fw-bold highlight">Subscribe Newsletter</p>
                                <h2 className="display-5 mb-3 font-black">Don't miss out on Fantastic Games</h2>
                                <p className="mb-5">Subscribe to our newsletter and be the first to receive news</p>
                                <div className="my-5">
                                    <form className="form">
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-lg-7">
                                                <div className="d-flex p-2 rounded-pill theme-border theme-transparent-bg">
                                                    <input type="text" className="form-control" placeholder="Enter your email address" />
                                                    <button type="button" className="btn custom-btn-subscribe"><i className="bi bi-envelope-fill" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq