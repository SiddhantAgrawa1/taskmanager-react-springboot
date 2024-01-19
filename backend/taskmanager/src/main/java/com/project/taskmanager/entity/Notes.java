package com.project.taskmanager.entity;

import jakarta.annotation.Generated;
import jakarta.persistence.*;

@Entity
@Table(name = "notes")
public class Notes {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "heading")
    String heading;
    @Column(name = "note")
    String note;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }


}
