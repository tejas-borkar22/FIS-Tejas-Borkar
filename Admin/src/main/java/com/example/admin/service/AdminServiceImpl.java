package com.example.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.admin.model.Admin;
import com.example.admin.model.PassengerDto;
import com.example.admin.repo.AdminRepo;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	FeignProxy proxy;
	
	@Autowired 
	AdminRepo repo;

	@Override
	public List<Admin> displayAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Admin addFlight(Admin flight) {
		// TODO Auto-generated method stub
		return repo.save(flight);
	}

	@Override
	public String deleteFlight(int flight_id) {
		// TODO Auto-generated method stub
		repo.deleteById(flight_id);
		return "Flight details deleted !!!";
	}

// Methods for Passenger 
	@Override
	public List<PassengerDto> getAllPassenger() {
		// TODO Auto-generated method stub
		return proxy.displayAll();
	}

	@Override
	public String deletePassenger(int profile_id) {
		// TODO Auto-generated method stub
		return proxy.deletePassenger(profile_id);
	}

}
