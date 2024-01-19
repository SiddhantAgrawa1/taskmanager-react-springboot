package com.project.taskmanager.dao;

import com.project.taskmanager.entity.Notes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesDAO extends JpaRepository<Notes,Integer> {
}
