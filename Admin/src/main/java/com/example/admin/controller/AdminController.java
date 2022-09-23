package com.example.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.admin.model.Admin;
import com.example.admin.model.PassengerDto;
import com.example.admin.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	AdminService service;
	
	@GetMapping("/display")
	public List<Admin> display(){
		return service.displayAll();
	}
	
	@PostMapping("/add")
	public Admin add(@RequestBody Admin flight) {
		return service.addFlight(flight);
	}
	
	@DeleteMapping("/delete{flight_id}")
	public String delete(@PathVariable("flight_id") int flight_id) {
		return service.deleteFlight(flight_id);
	}
	
	@PutMapping("/update")
	public Admin update(@RequestBody Admin flight) {
		return service.addFlight(flight);
	}
	
// Methods for Passenger 
	@GetMapping("passenger/all")
	public List<PassengerDto> getPassengerDetails(){
		return service.getAllPassenger();
	}
	@DeleteMapping("passenger/delete/{profile_id}")
	public String deletePassenger(@PathVariable("profile_id") int profile_id) {
		return service.deletePassenger(profile_id);
	}
}
