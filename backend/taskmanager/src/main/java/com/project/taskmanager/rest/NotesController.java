package com.project.taskmanager.rest;

import com.project.taskmanager.entity.Notes;
import com.project.taskmanager.service.NotesService;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class NotesController {

    NotesService notesService;

    NotesController(NotesService notesService){
        this.notesService = notesService;
    }

    @GetMapping("/notes")
    List<Notes> getAllNotes(){
        return notesService.getAllNotes();
    }

    @GetMapping("/notes/{id}")
    Notes getNoteById(@PathVariable int id){
        return notesService.getNoteById(id);
    }


    @PostMapping("/notes")
    Notes saveNote(@RequestBody Notes note) throws Exception{
        try{
            notesService.saveNote(note);
            return note;
        }catch (Exception exception){
            throw new Exception("Unable to process your request!");
        }
    }

    @DeleteMapping("/notes/{id}")
    int removeNote(@PathVariable int id) throws Exception{
        try{
            notesService.deleteNote(id);
            return id;
        }catch (Exception exception){
            throw new Exception("Unable to process your request!");
        }
    }
}
