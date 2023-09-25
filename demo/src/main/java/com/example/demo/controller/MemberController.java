package com.example.demo.controller;

import com.example.demo.controller.dto.MemberRequestDto;
import com.example.demo.controller.dto.MemberResponseDto;
import com.example.demo.repository.entity.Member;
import com.example.demo.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/login")
    public MemberResponseDto login(@RequestBody MemberRequestDto params) {
        return memberService.findBy(params);
    }
    @PostMapping("/signUp")
    public String signUp(@RequestBody MemberRequestDto params){
        return memberService.signUpMember(params);
    }
}

