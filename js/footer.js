// template refers to footer, which is the same for all webpages
const template = document.createElement('template');

template.innerHTML = `
    <footer>
        <a id ="top_button" href="#"><h6>back to top</h6></a>
        <br>
        <h6> website design and coding by yours truly✨
        <br>
        Copyright © 2023-<span id = "currYear"></span> Sissi Zhu. All Rights Reserved.
        </h6>
        <div class = "icons">
            <a href="mailto:sissizhu12@gmail.com">
                <img src="/media/email-icon2.svg" alt="Email letter icon link"/>
            </a>
            <a href="https://ca.linkedin.com/in/sissizhu12">
                <img src="/media/linkedin-icon.svg" alt="Linkedin icon link"/>
            </a>
            <a href="https://github.com/sissizhu12/website">
                <img src="/media/github-icon.svg" alt="Github icon link"/>
            </a>
        </div>
    </footer>
`;
document.body.appendChild(template.content);

// reference span ID above to set range with autoupdated ending year
// note: copyright text needs to be span element for inline property
var date= new Date();
var year= date.getFullYear();
document.getElementById('currYear').innerHTML = year;