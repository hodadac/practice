package com.example.demo.controller.dto;

import com.example.demo.repository.entity.Member;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MemberResponseDto {

    private Long idx;
    private String email;
    private String name;
    private String password;
    private String phoneNumber;

    public MemberResponseDto(Member member){
        this.idx=member.getIdx();
        this.email=member.getEmail();
        this.name=member.getName();
        this.password=member.getPassword();
        this.phoneNumber=member.getPhoneNumber();
    }
}
