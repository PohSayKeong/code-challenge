// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: resource/resource/query.proto

package resource

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Query_Params_FullMethodName     = "/resource.resource.Query/Params"
	Query_Farm_FullMethodName       = "/resource.resource.Query/Farm"
	Query_FarmAll_FullMethodName    = "/resource.resource.Query/FarmAll"
	Query_FindAnimal_FullMethodName = "/resource.resource.Query/FindAnimal"
)

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type QueryClient interface {
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
	// Queries a list of Farm items.
	Farm(ctx context.Context, in *QueryGetFarmRequest, opts ...grpc.CallOption) (*QueryGetFarmResponse, error)
	FarmAll(ctx context.Context, in *QueryAllFarmRequest, opts ...grpc.CallOption) (*QueryAllFarmResponse, error)
	// Queries a list of FindAnimal items.
	FindAnimal(ctx context.Context, in *QueryFindAnimalRequest, opts ...grpc.CallOption) (*QueryFindAnimalResponse, error)
}

type queryClient struct {
	cc grpc.ClientConnInterface
}

func NewQueryClient(cc grpc.ClientConnInterface) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, Query_Params_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) Farm(ctx context.Context, in *QueryGetFarmRequest, opts ...grpc.CallOption) (*QueryGetFarmResponse, error) {
	out := new(QueryGetFarmResponse)
	err := c.cc.Invoke(ctx, Query_Farm_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) FarmAll(ctx context.Context, in *QueryAllFarmRequest, opts ...grpc.CallOption) (*QueryAllFarmResponse, error) {
	out := new(QueryAllFarmResponse)
	err := c.cc.Invoke(ctx, Query_FarmAll_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) FindAnimal(ctx context.Context, in *QueryFindAnimalRequest, opts ...grpc.CallOption) (*QueryFindAnimalResponse, error) {
	out := new(QueryFindAnimalResponse)
	err := c.cc.Invoke(ctx, Query_FindAnimal_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
// All implementations must embed UnimplementedQueryServer
// for forward compatibility
type QueryServer interface {
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
	// Queries a list of Farm items.
	Farm(context.Context, *QueryGetFarmRequest) (*QueryGetFarmResponse, error)
	FarmAll(context.Context, *QueryAllFarmRequest) (*QueryAllFarmResponse, error)
	// Queries a list of FindAnimal items.
	FindAnimal(context.Context, *QueryFindAnimalRequest) (*QueryFindAnimalResponse, error)
	mustEmbedUnimplementedQueryServer()
}

// UnimplementedQueryServer must be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (UnimplementedQueryServer) Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}
func (UnimplementedQueryServer) Farm(context.Context, *QueryGetFarmRequest) (*QueryGetFarmResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Farm not implemented")
}
func (UnimplementedQueryServer) FarmAll(context.Context, *QueryAllFarmRequest) (*QueryAllFarmResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FarmAll not implemented")
}
func (UnimplementedQueryServer) FindAnimal(context.Context, *QueryFindAnimalRequest) (*QueryFindAnimalResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindAnimal not implemented")
}
func (UnimplementedQueryServer) mustEmbedUnimplementedQueryServer() {}

// UnsafeQueryServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to QueryServer will
// result in compilation errors.
type UnsafeQueryServer interface {
	mustEmbedUnimplementedQueryServer()
}

func RegisterQueryServer(s grpc.ServiceRegistrar, srv QueryServer) {
	s.RegisterService(&Query_ServiceDesc, srv)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_Params_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_Farm_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetFarmRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Farm(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_Farm_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Farm(ctx, req.(*QueryGetFarmRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_FarmAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllFarmRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).FarmAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_FarmAll_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).FarmAll(ctx, req.(*QueryAllFarmRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_FindAnimal_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryFindAnimalRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).FindAnimal(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Query_FindAnimal_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).FindAnimal(ctx, req.(*QueryFindAnimalRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Query_ServiceDesc is the grpc.ServiceDesc for Query service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Query_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "resource.resource.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
		{
			MethodName: "Farm",
			Handler:    _Query_Farm_Handler,
		},
		{
			MethodName: "FarmAll",
			Handler:    _Query_FarmAll_Handler,
		},
		{
			MethodName: "FindAnimal",
			Handler:    _Query_FindAnimal_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "resource/resource/query.proto",
}