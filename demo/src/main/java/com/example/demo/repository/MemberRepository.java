package com.example.demo.repository;

import com.example.demo.controller.dto.MemberResponseDto;
import com.example.demo.repository.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
    MemberResponseDto findByEmailAndPassword(final String email, final String password);
}
