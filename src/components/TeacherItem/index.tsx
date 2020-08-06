import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/9078894?s=460&u=ea3e6d44085c456988df9b4afb359a5801422216&v=4" alt="Flávio Henkes Bagestan"/>
                <div>
                    <strong>Flávio Henkes Bagestan</strong>
                    <span>Desenvolvimento Web</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br/><br/>
                Proin congue erat dolor, ut fringilla nunc gravida sed. Pellentesque viverra, felis eget finibus lobortis, mauris lacus scelerisque nunc, a rhoncus diam sem tincidunt tellus. Donec pulvinar pretium dui, vel consequat lectus tempor sed. Cras elementum rhoncus ultrices. Pellentesque congue mauris et ultricies semper. Ut laoreet cursus nulla ac hendrerit. Etiam varius sit amet libero tincidunt viverra.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;