/* references the vanilla templating concepts from https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/ */

const generateHeader = (currentPage) => {
    const headerTemplate = document.createElement('template');
    headerTemplate.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" aria-label="breadcrumb">
      <div class="container-fluid">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">${currentPage}</li>
        </ol>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapser" aria-controls="navbarCollapser" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapser">
          <ul class="navbar-nav ms-auto mb-lg-0">
            <li class="nav-item text-end">
              <a class="nav-link navPersonalLink" href="https://www.linkedin.com/in/stephjchoi/" target=_blank title="Stephanie's LinkedIn"><i class="fab fa-linkedin navPersonalIcon"></i></a>
            </li>
            <li class="nav-item text-end">
              <a class="nav-link navPersonalLink" href="https://github.com/choisteph" target=_blank title="Stephanie's Github"><i class="fab fa-github navPersonalIcon"></i></a>
            </li>
            <li class="nav-item text-end">
              <a class="nav-link navPersonalLink" href="mailto:stchoi@umich.edu" title="send something to Stephanie's Email"><i class="fas fa-envelope navPersonalIcon"></i></a>
            </li>
          </ul>              
        </div>
      </div>
    </nav>
  `
    document.querySelector('header').prepend(headerTemplate.content);
};


