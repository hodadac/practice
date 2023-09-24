package com.example.demo.service;

import com.example.demo.controller.dto.MemberRequestDto;
import com.example.demo.controller.dto.MemberResponseDto;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImp implements MemberService{
    private final MemberRepository memberRepository;

    @Override
    public MemberResponseDto findBy(MemberRequestDto params) {
        Member loginMember = params.toEntity();
        return new MemberResponseDto(memberRepository.findByEmailAndPassword(loginMember.getEmail(), loginMember.getPassword()));
    }
}
