package com.example.admin.service;

import java.util.List;
import com.example.admin.model.Admin;
import com.example.admin.model.PassengerDto;

public interface AdminService {
	public List<Admin> displayAll();
	public Admin addFlight(Admin flight);
	public String deleteFlight(int flight_id);
	
//	Methods for Passenger 
	public List<PassengerDto> getAllPassenger();
	public String deletePassenger(int profile_id);
}
