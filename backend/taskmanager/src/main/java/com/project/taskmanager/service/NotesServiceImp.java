package com.project.taskmanager.service;

import com.project.taskmanager.dao.NotesDAO;
import com.project.taskmanager.entity.Notes;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotesServiceImp implements NotesService {

    NotesDAO notesDAO;

    NotesServiceImp(NotesDAO notesDAO){
        this.notesDAO = notesDAO;
    }

    @Override
    public List<Notes> getAllNotes() {
        return notesDAO.findAll();
    }

    @Override
    public Notes getNoteById(int id) {
        Optional<Notes> optional = notesDAO.findById(id);
        if (optional.isPresent()){
            return optional.get();
        }
        return new Notes();
    }

    @Override
    public void saveNote(Notes note) {
        notesDAO.save(note);
    }

    @Override
    public void deleteNote(int id) {
        notesDAO.deleteById(id);
    }
}
