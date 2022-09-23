package com.example.passenger.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.passenger.model.Passenger;

public interface PassengerRepo  extends JpaRepository<Passenger,Integer> {
	
}
