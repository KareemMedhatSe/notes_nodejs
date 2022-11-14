
import  yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import  {create_note,remove_note,get_notes,read_note}from './controllers/notes.js'
yargs(hideBin(process.argv)).command({
command:'add',
describe:'Add a new note',
builder:{
title:{
    describe:'Note title',
    demandOption:true,
    type:'string',


},
body:{describe:'note body',
demandOption:true,
type:'string'

}

},
handler:function (argv){create_note(argv.title,argv.body)}




}).parse()
yargs(hideBin(process.argv)).command({command:'remove',describe:'remove note',
builder:{title:{describe:'note title',demandOption:true,type:'string'}},
handler:function(argv){remove_note(argv.title)}

}).parse()
yargs(hideBin(process.argv)).command({command:'display',describe:'display all notes',handler:function(){get_notes()}


}).parse()

yargs(hideBin(process.argv)).command({command:'read',describe:'reading specific note',
builder:{title:{describe:'title',demandOption:true,type:'string'}},
handler:function(argv){read_note(argv.title)}
}).parse()