package com.example.demo.service;

import com.example.demo.controller.dto.MemberRequestDto;
import com.example.demo.controller.dto.MemberResponseDto;
import com.example.demo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImp implements MemberService{
    private final MemberRepository memberRepository;

    @Override
    public MemberResponseDto findBy(MemberRequestDto params) {
        MemberResponseDto entity = memberRepository.findByEmailAndPassword(params.getEmail(), params.getPassword());
        return entity;
    }
}
