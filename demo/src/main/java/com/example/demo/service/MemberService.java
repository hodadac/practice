package com.example.demo.service;

import com.example.demo.controller.dto.MemberRequestDto;
import com.example.demo.controller.dto.MemberResponseDto;
import com.example.demo.repository.entity.Member;

public interface MemberService{
    MemberResponseDto findBy(MemberRequestDto params);
    String signUpMember(MemberRequestDto params);
}
