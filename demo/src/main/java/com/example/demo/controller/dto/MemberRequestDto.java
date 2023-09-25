package com.example.demo.controller.dto;

import com.example.demo.repository.entity.Member;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class MemberRequestDto {
    private String email;
    private String password;
    private String name;
    private String phoneNumber;


    public Member toEntity() {
        return Member.builder()
                .email(email)
                .password(password)
                .name(name)
                .phoneNumber(phoneNumber)
                .build();
    }
}
