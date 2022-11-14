import fs from 'fs'
import _ from 'lodash'
import chalk from 'chalk'

export const read_note=(title)=>{const all_notes=load_notes();
    const required_note=all_notes.find((note)=>{return note.title===title});
if(required_note){console.log(chalk.green.inverse('title:'+required_note.title+" body:"+required_note.body))}
else{console.log(chalk.red.inverse('cant find any not with such title'))}
}
export const get_notes=()=>{
    var all_notes=load_notes();
    for(var i=0;i<all_notes.length;i++){
        console.log(chalk.blue.inverse('title :'+all_notes[i].title+'--------'+ chalk.gray.inverse('body:'+all_notes[i].body)))


    }

}

export const remove_note=(title)=>{
    var all_notes=load_notes();
const elements=all_notes.filter((note)=>{return note.title!==title})
if(all_notes.length>elements.length){console.log(chalk.green.inverse('note has been successfully deleted '))}
else{console.log(chalk.red.inverse('error no such title '))}
save_changes(elements)


}
export const create_note=(title,body)=>{
    var all_notes=load_notes();
    const dubliacte_titles=all_notes.filter((note)=>{return note.title===title})
    if(dubliacte_titles.length==0){

    all_notes.push({
        title:title,
        body:body
    })
    
    save_changes(all_notes)
    console.log(chalk.green.inverse('note has been successfully created '))
}
    else {console.log(chalk.red.inverse('error is title is already taken '))}
}
const save_changes=(notes)=>{
 const json_notes=JSON.stringify(notes);
 fs.writeFileSync('notes.json',json_notes) 



}
const load_notes=()=>{
    try {
   var notes= fs.readFileSync('notes.json')
   var string_notes=notes.toString()
   var json_notes=JSON.parse(string_notes)
   return json_notes; 
} catch (error) {
    console.log(error)
}}

export default create_note