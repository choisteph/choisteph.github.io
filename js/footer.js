/* references the vanilla templating concepts from https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/ */

const generateFooter = () => {
    const footerTemplate = document.createElement('template');
    footerTemplate.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="footerContents d-flex flex-column align-items-center justify-content-around">
              <h2 id="footerHeader">Connect with me</h2>
              <div class="footerLinks d-flex align-items-center justify-content-center">
                <a class="footerLink" href="https://www.linkedin.com/in/stephjchoi/" target=_blank title="Stephanie's LinkedIn"><i class="fab fa-linkedin footerIcon"></i></a>
                <a class="footerLink" href="https://github.com/choisteph" target=_blank title="Stephanie's Github"><i class="fab fa-github footerIcon"></i></a>
                <a class="footerLink" href="mailto:stchoi@umich.edu" title="send something to Stephanie's Email"><i class="fas fa-envelope footerIcon"></i></a>
              </div>
              <a class="footnote" href="https://github.com/choisteph/choisteph.github.io#readme" target=_blank title="go to README for details">Designed by Stephanie Choi</a>              
            </div>
          </div>
        </div>   
      </div> <!--close container-->
  `
    document.querySelector('footer').append(footerTemplate.content);
};


