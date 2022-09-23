package com.example.admin.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.admin.model.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer>{

}
