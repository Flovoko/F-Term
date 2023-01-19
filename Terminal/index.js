console.clear();
const prompt = require("prompt-sync")({ sigint: true });
const fs = require('fs');
const { parseArgs } = require("util");
var cd = fs.readFileSync(
    'options/start_dir.txt'
);
var show_dir = fs.readFileSync(
    'options/show_dir.txt'
);
var ls_table = fs.readFileSync(
    'options/ls_table.txt'
);
var cd_temp;
var list = [];

console.log("F-FileIndex [Version 0.1] \n(c) Flovoko Corporation. Alle Rechte vorbehalten.\n");

do {
    if (show_dir == "true"){
        var input = prompt(cd + ">");
    }else{
        var input = prompt(">");
    }
    if(input == "ls"){
        list = fs.readdirSync(cd + '');
        console.log("\nIndex of " + cd + "\n");
        if(ls_table == "true"){
            console.table(list);
        }else{
            console.log(list);
        }
        console.log('\n');
    }else if(input == "mk"){

    }else if(input == "reload"){
        cd = fs.readFileSync(
            'options/start_dir.txt'
        );
        show_dir = fs.readFileSync(
            'options/show_dir.txt'
        );
        ls_table = fs.readFileSync(
            'options/ls_table.txt'
        );
    }else if(input == "cd"){
        console.log("\n[Current-Directory:" + cd + "]");
        cd_temp = prompt("Change-Directory>");
        console.log("\n");
        cd = cd_temp;
    }else if(input == 'cls'){
        console.clear();
    }else{
    }
} while (1 != 2);