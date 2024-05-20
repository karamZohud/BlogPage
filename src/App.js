import Post from "./Componants/Post";
import PostContainer from "./Componants/PostContainer";
import TitleCompnants from "./Componants/TitleCompnants";
import PersonInfo from "./Componants/PersonInfo";
import './app.css';
import Tags from "./Componants/Tags";
import Footer from "./Componants/Footer";
function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <h1 className="text-center">My Blog</h1>
        <h4 className="text-center">welcome to the blog of <span className="bg-black text-white p-1">unknown</span></h4>
    </div>
    <div className="container mt-4">
    <div className="row">
      <div className="col-lg-7  ">
      <TitleCompnants src="https://www.w3schools.com/w3images/woods.jpg" title="TITLE HEADING
" date="April 7, 2014" desc="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
"numComments="0"/>
      <TitleCompnants src="https://www.w3schools.com/w3images/bridge.jpg" title="BLOG ENTRY

" date="April 2, 2014" desc="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
" numComments="2"/>
      </div>
      <div className="col-lg-5 col-12">
      <PersonInfo/>
<PostContainer/>
<Tags/>
      </div>


</div>



</div>
<Footer/>


      </div>
  );
}

export default App;
