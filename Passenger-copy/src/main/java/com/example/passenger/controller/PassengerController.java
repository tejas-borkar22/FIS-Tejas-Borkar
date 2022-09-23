package com.example.passenger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.passenger.model.Passenger;
import com.example.passenger.service.PassengerService;

@RestController
@RequestMapping("/passenger")
public class PassengerController {
	
	@Autowired 
	PassengerService service;
	
	@GetMapping("/display")
	public List<Passenger> display(){
		return service.displayAll();
	}
	
	@DeleteMapping("/delete/{profile_id}")
	public String delete(@PathVariable("profile_id") int profile_id) {
		return service.deletePassenger(profile_id);
	}
}
