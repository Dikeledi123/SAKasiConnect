package com.kasiconnect.repository;

import com.kasiconnect.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessRepository extends JpaRepository<Business, Long> {
}
