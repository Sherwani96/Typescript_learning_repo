import {strict as assert} from 'assert';

type Link = {
    title: string;
    url: string;
};

const company1 = {
    title: "microsoft",
    url: "microsoft.com",
};

const company2 = {
    title: "google",
    url: "google.com",
};

const links = [company1, company2];

// even we can update the content of the array
links[0].url = "www.microsoft.com";
links[1].url = "www.google.com";
console.log(links)