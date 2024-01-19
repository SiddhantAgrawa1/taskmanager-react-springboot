package com.project.taskmanager.service;

import com.project.taskmanager.entity.Notes;

import java.util.List;

public interface NotesService {

    List<Notes> getAllNotes();
    Notes getNoteById(int id);
    void saveNote(Notes note);
    void deleteNote(int id);

}
