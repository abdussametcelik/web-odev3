import "./App.css";
import React from 'react'
function Arama({aramaMetni,onSearch}){

    function handleChange(event){
        props.onSearch(event);
    }

    //handleChange arama metnini güncelliyor
    return(
        <div>
            <label htmlFor="arama">Ara: </label>
            <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
            <p>

            </p>
        </div>
    )
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
    return(
        <li key={id}>
        <span>
          <a href={url}>{baslik}</a>,
        </span>
            <span><b>Yazar:</b> {yazar}, </span>
            <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
            <span><b>Puan:</b> {puan}</span>
        </li>
    )
}

function Liste(props){
    
    return(
        <ul>
            { props.yazilar.map(function(yazi){
                return(
                    <Yazi key={yazi.id} {...yazi}/>
                );
            })}{""}

        </ul>
    )
}
function App() 
    const[aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "react");
    const yaziListesi = [
        {
            baslik: "React Öğreniyorum",
            url: "www.sdu.edu.tr",
            yazar: "Sinan Yüksel",
            yorum_sayisi: 3,
            puan: 4,
            id: 0,
        },
        {
            baslik: "Web Teknolojileri ve Programlama",
            url: "wwww.google.com.tr",
            yazar: "Asım Yüksel",
            yorum_sayisi: 2,
            puan: 5,
            id: 1,
        },
        {
            baslik: "Introduction to JavaScript",
            url: "www.example.com/js",
            yazar: "John Doe",
            yorum_sayisi: 5,
            puan: 4,
            id: 2,
        },
        {
            baslik: "CSS Styling Techniques",
            url: "www.example.com/css",
            yazar: "Jane Smith",
            yorum_sayisi: 1,
            puan: 3,
            id: 3,
        },
        {
            baslik: "Backend Development with Node.js",
            url: "www.example.com/node",
            yazar: "Chris Johnson",
            yorum_sayisi: 4,
            puan: 5,
            id: 4,
        },
        {
            baslik: "React Native Basics",
            url: "www.example.com/react-native",
            yazar: "Emily Williams",
            yorum_sayisi: 2,
            puan: 4,
            id: 5,
        },
        {
            baslik: "Python Fundamentals",
            url: "www.example.com/python",
            yazar: "Alex Turner",
            yorum_sayisi: 8,
            puan: 4,
            id: 6,
        },
        {
            baslik: "Data Science with Python",
            url: "www.example.com/data-science",
            yazar: "Emma Miller",
            yorum_sayisi: 3,
            puan: 5,
            id: 7,
        },
        {
            baslik: "Mobile App Design Principles",
            url: "www.example.com/app-design",
            yazar: "Daniel Brown",
            yorum_sayisi: 6,
            puan: 4,
            id: 8,
        },
        {
            baslik: "Machine Learning Basics",
            url: "www.example.com/machine-learning",
            yazar: "Sophia Garcia",
            yorum_sayisi: 4,
            puan: 5,
            id: 9,
        },
    ];

    const arananYazilar=yaziListesi.filter(
        function(yazi){
            return yazi.baslik.toLocaleLowerCase().includes(aramaMetni.toLocaleLowerCase()) || yazi.yazar.toLocaleUpperCase().includes(aramaMetni.toLocaleUpperCase())
        }
    );

    function handleSearch(event) {
        setAramaMetni(event.target.value);
    
    }

    React.useEffect(() => {
        localStorage.setItem("aranan",aramaMetni)
    }, [aramaMetni])


    return (
        <div>
            <h1>Yazılar</h1>
            <Arama aramaMetni = {aramaMetni} onSearch = {handleSearch}/>
            <strong>
                {aramaMetni} aranıyor...
            </strong>
            <hr />
            <Liste yazilar={arananYazilar}/>

        </div>
    );
}
export default App;
