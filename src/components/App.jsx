
import "../scss/App.scss";


function App




<body>
  <div class="container">

    <header class="header">
      <a class="header__brand" href="./" title="Haz click para volver a la página inicial">
        <img class="header__companyLogo" src="./images/laptop-code-solid.svg" alt="Logo proyectos molones">
        <h1 class="header__title">Proyectos molones</h1>
      </a>
      <img class="logoSponsor" src="./images/adalab.png" alt="Logo Adalab">
    </header>
    
    <main class="main">
      <section class="hero">
        <h2 class="title">Proyectos molones</h2>
        <p class="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a class="button--link" href="./">Ver proyectos</a>
      </section>

      <section class="preview">
        <div class="projectImage"></div>
        <article class="card">
          <h2 class="card__projectTitle"><span class="card__projectTitle--text">Personal project card</span></h2>

          <div class="card__author">
            <div class="card__authorPhoto"></div>
            <p class="card__job">
              Full stack Developer
            </p>
            <h3 class="card__name">Emmelie Bjôrklund</h3>
          </div>
      
          <div class="card__project">            
            <h3 class="card__name">Elegant Workspace</h3>
            <p class="card__slogan">Diseños Exclusivos</p>
            <h3 class="card__descriptionTitle">Product description</h3>
            <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione</p>

            <div class="card__technicalInfo">
              <p class="card__technologies">React JS - HTML - CSS</p>
          
              <a class="icon icon__www" href="#" title="Haz click para ver el proyecto online">
                Web link
              </a>
              <a class="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
      <form class="addForm">
        <h2 class="title">Información</h2>
        <fieldset class="addForm__group">
          <legend class="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input class="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto">
          <input class="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan">
          <div class="addForm__2col">
            <input class="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio">
            <input class="addForm__input" type="url" name="demo" id="demo" placeholder="Demo">
          </div>         
          <input class="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías">
          <textarea class="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5"></textarea>
        </fieldset>
    
        <fieldset class="addForm__group">
          <legend class="addForm__title">Cuéntanos sobre la autora</legend>
          <input class="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre">
          <input class="addForm__input" type="text" name="job" id="job" placeholder="Trabajo">
        </fieldset>
    
        <fieldset class="addForm__group--upload">
          <label for="image" class="button">Subir foto del proyecto</label>
          <input class="addForm__hidden" type="file" name="image" id="image">
          <label for="photo" class="button">Subir foto de la autora</label>
          <input class="addForm__hidden" type="file" name="photo" id="photo">
          <button class="button--large">Guardar proyecto</button>
        </fieldset>
        
      </form>
    </main>

    <footer class="footer">
      <img class="logoSponsor" src="./images/adalab.png" alt="Logo Adalab">
    </footer>

    





    


    <!--
    <header class="header">
      <a href="./">
        <div class="header_left">
          <i class="fa-solid fa-cat fa-2xl header_left-icon" aria-hidden="true"></i>
          <h1 class="header_left-text">Proyectos molones</h1>
        </div>
      </a>
      <img class="header_logo"
        src="./images/adalab.png"
        alt="Logo Adalab">
    </header>
    <main class="main">
      <section class="intro">
        <h1 class="intro_title">Proyectos molones</h1>
        <p class="intro_text">Escaparate en línea para recoger ideas a través de la tecnología.</p>
      </section>
      <a class="linkProject" href="#/">
        <button class="linkProject_project-btn">Ver Proyectos</button> <!-- TODO - - >
      </a>
      <section class="preview">
        <div class="preview_image" style="background-image: url('./images/project.jpg');"></div>
        <article class="preview_autor">
          <section class="infoProject">
            <div class="infoProject_container">
              <hr class="infoProject_container-line1">
              <p class="infoProject_container-subtitle">Personal Project Card</p>
              <hr class="infoProject_container-line2">
            </div>
            <h2 class="infoProject_title">Elegant Workspace</h2>
            <p class="infoProject_slogan">Diseños Exclusivos</p>
            <p class="infoProject_desc">Gestión de proyectos en línea, diseñado para simplificar y agilizar tu
              trabajo como programadora. Con solo crear una tarjeta para cada proyecto, podrás organizarlos de manera
              eficiente. ¡Optimiza tu productividad y alcanza tus metas de manera efectiva con nosotras!</p>
            <section class="technologies">
              <p class="technologies_text">React JS - HTML - CSS</p><button src="" target="_blank"
                class="technologies_icon"><i class="fa-solid fa-globe technologies_icon-img"
                  aria-hidden="true"></i></button><button src="" target="_blank" class="technologies_icon"><i
                  class="fa-brands fa-github technologies_icon-img" aria-hidden="true"></i></button>
            </section>
          </section>
          <section class="infoAutor">
            <div class="infoAutor_image" style="background-image: url(&quot;/assets/avatar-a91e8c67.png&quot;);"></div>
            <p class="infoAutor_job">Full Stack Developer</p>
            <p class="infoAutor_name">Emmelie Björklund</p><button class="btn"></button>
          </section>
        </article>
      </section>
      <section class="form"><i class="fa-regular fa-trash-can fa-2xl form_trash" aria-hidden="true"></i>
        <h2 class="form_title">Información</h2>
        <section class="form_askInfo">
          <div class="form_askInfo_container">
            <p class="form_askInfo_container-subtitle">Cuéntanos sobre el proyecto</p>
            <hr class="form_askInfo-line">
          </div>
        </section>
        <fieldset class="form_project"><input class="form_project-input" type="text" placeholder="Nombre del proyecto *"
            name="name" id="name" required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" name="slogan" id="slogan"
            placeholder="Slogan *" required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" name="repo" id="repo" placeholder="Repo *"
            required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" placeholder="Demo *" name="demo" id="demo"
            required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" placeholder="Tecnologías *"
            name="technologies" id="technologies" required="" value="">
          <p class="error"></p><textarea maxlength="300" class="form_project-textarea" type="text"
            placeholder="Descripción * (Máx. 300 caracteres)" name="desc" id="desc" required=""></textarea>
          <p class="error"></p>
        </fieldset>
        <section class="form_askInfo">
          <p class="form_askInfo-autor">Cuéntanos sobre la autora</p>
          <hr class="form_askInfo-line">
        </section>
        <fieldset class="form_project"><input class="form_project-input" type="text" placeholder="Nombre *" name="autor"
            id="autor" required="" value="">
          <p class="error"></p><input class="form_project-input" type="text" placeholder="Trabajo *" name="job" id="job"
            required="" value="">
          <p class="error"></p>
        </fieldset>
        <section class="form_btn">
          <div class="form_btn-first"><label class="form_btn-first-upload">Subir foto del proyecto<input type="file"
                style="display: none;"></label><label class="form_btn-first-upload">Subir foto de la autora<input
                type="file" style="display: none;"></label></div>
          <p class="error"></p>
          <p class="error"></p>
          <div><button class="form_btn-create">Crear Tarjeta</button></div>
        </section>
        <section class="form_card hidden"><span class="form_card-msg"> La tarjeta ha sido creada:</span><a href=""
            class="form_card-link" target="_blank" rel="noreferrer"></a></section>
      </section>
    </main>
    <footer class="footer"><img class="footer_img"
        src="./images/adalab.png"
        alt=""></footer>
    -->
  </div>
</body>

</html>