package com.example.passenger.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.passenger.model.Passenger;
import com.example.passenger.repo.PassengerRepo;

@Service
public class PassengerServiceImpl implements PassengerService{
	
	@Autowired 
	PassengerRepo repo;

	@Override
	public List<Passenger> displayAll() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public String deletePassenger(int profile_id) {
		// TODO Auto-generated method stub
		repo.deleteById(profile_id);
		return null;
	}
}
